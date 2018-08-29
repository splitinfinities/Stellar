import { Component, Prop, State, Method } from '@stencil/core'

@Component({
  tag: 'web-audio-sequencer',
  shadow: true
})
export class WebAudioSequencer {

  @Prop() name: string = "web_audio_sequencer"
  @Prop() autoplay: boolean = false
  @Prop() taps: number = 4
  @Prop() tempo: number

  @State() context: any = () => {
    // @ts-ignore
    return document.querySelector('web-audio').get_context()
  }

  @State() iterations: number
  @State() startTime: number
  @State() noteTime: number = 0.0
  @State() currentTap: number = 0
  @State() totalPlayTime: number = 0.0

  @Prop() custom: Function = () => {
    // do nothing
  }

  @State() timer: any

  componentDidLoad() {
    if (this.autoplay) {
      this.play()
    }
  }

  schedule () {
    var currentTime = this.context().currentTime

    // The sequence starts at startTime, so normalize currentTime so that it's 0 at the start of the sequence.
    currentTime -= this.startTime

    while (this.noteTime < currentTime + 0.005) {
      this.totalPlayTime = this.noteTime + this.startTime

      if (this.currentTap === 0) {
        this.iterations++
      }

      this.custom()

      this.advance()
    }

    this.timer = setTimeout(() => {
      this.schedule()
    }, 0)
  }

  advance () {
    // Setting tempo to 60 BPM just for now
    var secondsPerBeat = 60 / this.tempo

    this.currentTap++

    if (this.currentTap == this.taps) {
        this.currentTap = 0
    }

    // 0.25 because each square is a 16th note
    this.noteTime += 0.25 * secondsPerBeat
  }

  @Method()
  play () {
    if (!this.context()) {
      // @ts-ignore
      document.querySelector('web-audio').connect_the_world();
    }

    this.iterations = 0
    this.startTime = this.context().currentTime + 0.005 || 0.005
    this.schedule()
  }

  @Method()
  stop () {
    this.iterations = 0
    this.startTime = null
    this.currentTap = 0
    clearTimeout(this.timer)
  }

  render() {
    return [
      <button class="play" onClick={() => { this.play() }}>Play</button>,
      <button class="stop" onClick={() => { this.stop() }}>Stop</button>
    ]
  }
}
