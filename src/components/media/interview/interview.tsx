import { Component, Element, State, Prop, Method, Listen, h } from '@stencil/core';
import ezClipboard from 'ez-clipboard';
import properties from 'css-custom-properties';

@Component({
  tag: 'stellar-interview',
  styleUrl: 'interview.css'
})
export class Interview {
  @Element() element: HTMLElement;

  @State() randomId: number = Math.floor(Math.random() * 6) + 1;

  @Prop() src: string;
  @Prop() debug: boolean = false;
  @Prop() color: string = "gray";
  @Prop({mutable: true}) playing: boolean = false;

  @Prop({mutable: true}) width: number = 800;
  @Prop({mutable: true}) height: number = 800;
  @Prop({mutable: true}) aspectRatio: number = 100;

  @State() audio: HTMLWebAudioElement;
  @State() audio_source: HTMLWebAudioSourceElement;
  @State() io: IntersectionObserver;

  @State() loaded: boolean = false;
  @State() loading: boolean = false;

  @State() updateFunc: Function;

  @State() duration: number = 1;
  @State() current: number = 0;

  @State() interviewLines: any;

  componentWillLoad() {
    properties.set({
      "--width": `${this.width}px`,
      "--height": `${this.height}px`,
      "--aspectRatio": `${this.aspectRatio}%`
    }, this.element);
  }

  componentDidLoad() {
    this.update_interview_lines()
    this.audio = this.element.querySelector('web-audio')
    this.addIntersectionObserver();
  }

  addIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any) => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          // this.handleInScreen();
        } else {
          this.handleOffScreen();
        }
      }, {
        threshold: [0]
      })

      this.io.observe(this.element);
    }
  }

  cache = new WeakMap()
  difference = (a, b) => Math.abs(a - b)
  limit = (min, max, value) => Math.max(Math.min(value, max), min)
  interval = (start, end, current) => this.difference(start, current) / this.difference(start, end)
  interpolate = (start, end, progress) => {
    const p = this.difference(start, end) * progress
    return start > end ? start - p : start + p
  }

  @Listen('timeupdate')
  handleTimeUpdate(event) {
    this.current = Math.round(event.detail.time * 1000);
    this.duration = Math.round(event.detail.duration * 1000);

    this.update_interview_lines()
  }

  get_interview_lines () {
    const els: Array<HTMLElement> = Array.from(this.element.querySelectorAll('.line'))

    this.interviewLines = els.map(el => {
      const offset = 0
      const end = parseInt(el.dataset.end, 10)
      const start = parseInt(el.dataset.start, 10)
      const opacityStart = parseFloat(el.dataset.opacityStart)
      const opacityEnd = parseFloat(el.dataset.opacityEnd)
      const translateXStart = parseInt(el.dataset.translatexStart, 10)
      const translateXEnd = parseInt(el.dataset.translatexEnd, 10)
      const translateYStart = parseInt(el.dataset.translateyStart, 10)
      const translateYEnd = parseInt(el.dataset.translateyEnd, 10)
      const scaleStart = parseFloat(el.dataset.scaleStart)
      const scaleEnd = parseFloat(el.dataset.scaleEnd)
      const updates = {}

      if (!isNaN(opacityStart) && !isNaN(opacityEnd)) {
        updates["opacity"] = {
          end: opacityEnd,
          start: opacityStart
        }
      }

      if (!isNaN(translateXStart) && !isNaN(translateXEnd)) {
        updates["translateX"] = {
          end: translateXEnd,
          start: translateXStart
        }
      }

      if (!isNaN(translateYStart) && !isNaN(translateYEnd)) {
        updates["translateY"] = {
          end: translateYEnd,
          start: translateYStart
        }
      }

      if (!isNaN(scaleStart) && !isNaN(scaleEnd)) {
        updates["scale"] = {
          end: scaleEnd,
          start: scaleStart
        }
      }

      if (
        typeof end === 'undefined' ||
        typeof start === 'undefined' ||
        Object.keys(updates).length === 0
      ) {
        return null
      }

      return { el, end, offset, start, updates }
    }).filter(x => x)

    return this.interviewLines;
  }

  update_interview_lines () {
    const transformProp = this.prefixedTransformProp()
    const y = this.time()

    this.get_interview_lines().map(({ el, end, offset, start, updates }) => {
      const s = offset + start
      const e = offset + end
      const state = this.cache.get(el)

      if (
        (y >= s && y <= e) ||
        (state !== 'before' && y < s) ||
        (state !== 'after' && y > e)
      ) {
        let translateX = 0
        let translateY = 0
        let scale = 1

        const current = this.limit(s, e, y)
        const i = this.interval(s, e, current)

        if (updates.opacity) {
          const { end, start } = updates.opacity
          const opacity = this.interpolate(start, end, i).toFixed(2)
          el.style.opacity = opacity
        }

        if (updates.translateX) {
          const { end, start } = updates.translateX
          translateX = parseInt(this.interpolate(start, end, i), 10)
        }

        if (updates.translateY) {
          const { end, start } = updates.translateY
          translateY = parseInt(this.interpolate(start, end, i), 10)
        }

        if (updates.scale) {
          const { end, start } = updates.scale
          scale = this.interpolate(start, end, i).toFixed(2)
        }

        el.style[transformProp] =
          `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`

        if (y < s) {
          this.cache.set(el, 'before')
        } else if (y > e) {
          this.cache.set(el, 'after')
        } else {
          this.cache.set(el, 'during')
        }
      }
    })
  }

  prefixedTransformProp () {
    const el = document.createElement('div')
    const vendors = ['Webkit', 'webkit', 'Moz', 'moz', 'ms', 'o']

    if (el.style.transform != null) {
      return 'transform'
    }

    for (let v in vendors) {
      const prop = `${vendors[ v ]}Transform`

      if (typeof el.style[ prop ] !== 'undefined') {
        return prop
      }
    }
  }

  time() {
    return this.current
  }

  async handleInScreen(cb = () => {}) {
    this.loading = true;
    if (!this.loaded && !this.audio.is_prepared()) {
      await this.audio.connect_the_world();

      this.loaded = true;

      setTimeout(async () => {
        this.loading = false;
        this.audio_source = await this.audio.source("interview")
        this.audio_source.prepare()
        const duration = await this.audio_source.getDuration()
        this.duration = Math.round(duration * 1000);
        cb()
      }, 1000)
    }
  }

  async handleOffScreen() {
    this.pause()
  }

  @Method()
  async play() {
    if (this.audio) {
      if (this.audio_source) {
        this.audio_source.play()
      }
      this.playing = this.audio_source.playing;
    }
  }

  @Method()
  async skipTo(time: number) {
    if (this.audio) {
      if (this.audio_source) {
        this.audio_source.skipTo(time)
      }
      this.playing = this.audio_source.playing;
    }
  }

  @Method()
  async pause() {
    if (this.audio) {
      if (this.audio_source) {
        this.audio_source.pause()
      }
      this.playing = this.audio_source.playing;
    }
  }

  @Method()
  async toggle() {
    if (this.audio) {
      if (this.audio_source) {
        this.audio_source.toggle()
      }
      this.playing = this.audio_source.playing;
    }
  }

  handleClick() {
    if (!this.audio.is_prepared()) {
       this.handleInScreen(() => {
         this.handleClick()
       });
    } else {
      this.toggle();
    }

    if (this.current === this.duration) {
      this.skipTo(0)
    }
  }

  handleCurrentClick() {
    ezClipboard.copyPlain(this.current);
  }

  render () {
    return (
      <div class="card" onDblClick={() => { this.handleClick() }}>
        <section>
          <slot />
          <div class="transcript">
            <slot name="transcript"></slot>
          </div>
          <web-audio name={`interview-${this.randomId}`}>
            <web-audio-source src={this.src} name="interview"></web-audio-source>
          </web-audio>
          { this.debug && <web-audio-debugger /> }
          <web-audio-visualizer for={`interview-${this.randomId}`} type="bars" color={this.color} />
          <button class={this.loading ? "loading button" : (this.playing ? "playing button" : "button")} onClick={() => { this.handleClick() }}>
            <stellar-asset name={this.loading ? "sync" : (this.playing ? "pause" : "play")} class={this.loading ? "animation-spin" : ""} />
          </button>
          <h3>
            <stellar-unit class="current" value={this.current} from="ms" to="s" onClick={() => { this.handleCurrentClick() }} />
          </h3>
          <h3>
            <stellar-unit class="duration" value={this.duration} from="ms" to="s" />
          </h3>
          <stellar-progress value={this.current} max={this.duration} noease={true} blurable={false} slender={true} editable={true} onValueChange={(e) => { this.skipTo(e.detail.value) }} />
        </section>
      </div>
    )
  }
}
