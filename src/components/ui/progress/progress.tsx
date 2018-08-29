import { Component, Watch, Prop, State, Element, Event, EventEmitter } from '@stencil/core'
import Easing from 'easing'

@Component({
  tag: 'stellar-progress',
  styleUrl: 'progress.css'
})
export class Progress {
  @Element() element: HTMLElement;

  /**
   * Renders if this element is slender or not
   */
  @Prop({reflectToAttr: true}) slender: boolean = false

  /**
   * Sets the maximum cap for steps in the progress bar
   */
  @Prop({reflectToAttr: true}) max: number = 100

  /**
   * Allows the progress bar to be clicked on, to help the user to navigate through the progressing content.
   */
  @Prop({reflectToAttr: true}) editable: boolean = false

  /**
   * eliminates the easing in the css so you can apply value updates without jitter.
   */
  @Prop({reflectToAttr: true}) noease: boolean = false

  /**
   * Sets the value of the progress bar
   */
  @Prop({reflectToAttr: true, mutable: true}) value: number = 0

  @Prop() blurable: boolean = true
  @State() wrapper: "stellar-blur"|"div" = "stellar-blur"

  @State() blur: number = 0;

  @Event() valueChange: EventEmitter;

  componentWillLoad () {
    if (!this.blurable) {
      this.wrapper = "div";
    }
  }

  @Watch("value")
  observeValue() {
    if (this.blurable) {
      const blurEvent = Easing.event(30, 'quadratic', { duration: 320, endToEnd: true, invert: false })
      blurEvent.on('data', (data: number) => {
        this.blur = data * 30
      })
    }
  }

  handleClick(e) {
    if (this.editable) {
      var bounding = this.element.getBoundingClientRect()
      var widthClicked = e.pageX - bounding.left;
      var totalWidth = bounding.width;
      var calc = (widthClicked / totalWidth * this.max);
      var calc_fix = Math.round( calc * 1e2 ) / 1e2;

      this.value = calc_fix;

      this.valueChange.emit({
        value: this.value
      })
    }
  }

  progress() {
    let progress = (this.value/this.max) * 100
    progress = progress < 100 ? progress : 100
    progress = progress > 0 ? progress : 0
    return progress
  }

  render() {
    // @ts-ignore
    return (<this.wrapper class="progress" horizontal={this.blur} onClick={(e) => { this.handleClick(e); }}>
        <div class="status" style={{transform: `translate(${this.progress()}%, 0)`}}></div>
      </this.wrapper>
    )
  }
}
