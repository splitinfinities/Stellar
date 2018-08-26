import { Component, Watch, Prop, State } from '@stencil/core'
import Easing from 'easing'

@Component({
  tag: 'stellar-progress',
  styleUrl: 'progress.css'
})
export class Progress {
  /**
   * Renders if this element is slender or not
   */
  @Prop({reflectToAttr: true}) slender: boolean = false

  /**
   * Sets the maximum cap for steps in the progress bar
   */
  @Prop({reflectToAttr: true}) max: number = 100

  /**
   * Sets the value of the progress bar
   */
  @Prop({reflectToAttr: true, mutable: true}) value: number = 0

  @State() blur: number = 0

  @Watch("value")
  valueChange() {
    const blurEvent = Easing.event(30, 'quadratic', { duration: 320, endToEnd: true, invert: false })
    blurEvent.on('data', (data: number) => {
      this.blur = data * 30
    })
  }

  progress() {
    let progress = (this.value/this.max) * 100
    progress = progress < 100 ? progress : 100
    progress = progress > 0 ? progress : 0
    return progress
  }

  render() {
    return (
      <stellar-blur class="progress" horizontal={this.blur}>
        <div class="status" style={{transform: `translate(${this.progress()}%, 0)`}}></div>
      </stellar-blur>
    )
  }
}
