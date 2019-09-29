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

  @State() context: any = async () => {
    // @ts-ignore
    return await document.querySelector('web-audio').get_context()
  }

  @State() iterations: number
  @State() startTime: number
  @State() noteTime: number = 0.0
  @State() currentTap: number = 0
  @State() totalPlayTime: number = 0.0

  @Prop() custom: Function = async () => { }

  @State() timer: any

  componentDidLoad() {
    if (this.autoplay) {
      this.play()
    }
  }

  async schedule () {
    var currentTime = (await this.context()).currentTime;

    // The sequence starts at startTime, so normalize currentTime so that it's 0 at the start of the sequence.
    currentTime -= this.startTime;

    while (this.noteTime < currentTime + 0.005) {
      try {
        await this.custom();

        this.totalPlayTime = this.noteTime + this.startTime;

        if (this.currentTap === 0) {
          this.iterations++
        }

        this.advance()

      } catch (e) {
        console.error(e);
      }
    }

    this.timer = setTimeout(async () => {
      await this.schedule()
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
  async play () {
    if (!(await this.context())) {
      // @ts-ignore
      await document.querySelector('web-audio').connect_the_world();
    }

    this.iterations = 0
    this.startTime = (await this.context()).currentTime + 0.005 || 0.005
    await this.schedule()
  }

  @Method()
  async stop () {
    this.iterations = 0;
    this.totalPlayTime = 0;
    this.startTime = null;
    this.currentTap = 0;
    this.noteTime = 0;
    clearTimeout(this.timer)
  }
}
