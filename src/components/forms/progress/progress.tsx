import { Component, Watch, Prop, State, Element, Event, EventEmitter} from '@stencil/core'
import { blurringEase } from '../../../utils';

@Component({
  tag: 'stellar-progress',
  styleUrl: 'progress.css',
  shadow: true
})
export class Progress {
  @Element() element: HTMLElement;

  /**
   * Renders if this element is slender or not
   */
  @Prop({reflectToAttr: true}) slender: boolean = false;

  /**
   * Sets the maximum cap for steps in the progress bar
   */
  @Prop({reflectToAttr: true}) max: number = 100;

  /**
   * Allows the progress bar to be clicked on, to help the user to navigate through the progressing content.
   */
  @Prop({reflectToAttr: true}) editable: boolean = false;

  /**
   * eliminates the easing in the css so you can apply value updates without jitter.
   */
  @Prop({reflectToAttr: true}) noease: boolean = false;

  /**
   * eliminates the easing in the css so you can apply value updates without jitter.
   */
  @Prop({reflectToAttr: true}) rounded: boolean = false;

  /**
   * Sets the value of the progress bar
   */
  @Prop({reflectToAttr: true, mutable: true}) value: number = 0;

  /**
   * Sets the value of the progress bar
   */
  @Prop({reflectToAttr: true, mutable: true}) secondary: number = 0;

  @Prop() blurable: boolean = true;
  @State() wrapper: "stellar-blur"|"div" = "stellar-blur";
  @State() blur: number = 0;
  @State() ease: TweenInstance = blurringEase({
    end: 20,
    start: -1,
    duration: 200,
    tick: (args) => {
      this.blur = args.value;
    },
    complete: () => {
      this.blur = 0;
      this.ease.stop();
    },
  });
  @Event() valueChange: EventEmitter;

  componentWillLoad () {
    if (!this.blurable) {
      this.wrapper = "div";
    }
  }

  @Watch("value")
  observeValue() {
    if (this.blurable) {
      this.ease.start();
    }
  }

  handleClick(e) {
    if (this.editable) {
      var bounding = this.element.getBoundingClientRect()
      var widthClicked = e.pageX - bounding.left;
      var totalWidth = bounding.width;
      var calc = (widthClicked / totalWidth * this.max);
      var rounded = Math.round( calc * 1e2 ) / 1e2;

      console.log(`bounding: ${bounding}`)
      console.log(`widthClicked: ${widthClicked}`)
      console.log(`totalWidth: ${totalWidth}`)
      console.log(`max: ${this.max}`)
      console.log(`calc: ${calc}`)
      console.log(`rounded: ${rounded}`)

      if (this.rounded) {
        rounded = Math.ceil(rounded);
      }

      this.value = rounded;

      this.valueChange.emit({
        value: this.value
      })
    }
  }

  progress(secondary?) {
    if (secondary) {
      let progress = (this.secondary/this.max) * 100
      progress = progress < 100 ? progress : 100
      progress = progress > 0 ? progress : 0
      return progress
    } else {
      let progress = (this.value/this.max) * 100
      progress = progress < 100 ? progress : 100
      progress = progress > 0 ? progress : 0
      return progress
    }
  }

  render() {
    // @ts-ignore
    return (<this.wrapper class="progress" horizontal={this.blur} onClick={(e) => { this.handleClick(e); }}>
        <div class="status" style={{transform: `translate(${this.progress()}%, 0)`}}></div>
        {this.secondary && <div class="secondary" style={{transform: `translate(${this.progress(true)}%, 0)`}}></div>}
      </this.wrapper>
    )
  }
}
