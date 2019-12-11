import { Component, Element, Prop, State, h, Host } from '@stencil/core'

@Component({
  tag: 'stellar-simple-slides',
  styleUrl: 'simple-slides.css',
  shadow: true
})
export class Slides {
  @Element() el!: HTMLElement
  @State() slides;

  /**
   * Show or hide the pager
   */
  @Prop() pager = false;

  /**
   * Show or hide the pager
   */
  @Prop() padding: string = "1rem";

  /**
   * Enable blurring
   */
  @Prop() blurring = false;

  /**
   * The blur value
   */
  @State() blur = -1;

  componentWillLoad () {
      this.slides = this.el.querySelectorAll("stellar-slide");

      this.slides.forEach((slide: HTMLElement) => {
        slide.setAttribute("tabIndex", "0")
      })
  }

  render() {
    return <Host tabIndex={0} style={{'--padding': this.padding}} >
        <div class="wrapper">
            <slot />
        </div>
        {this.pager && <div></div>}
    </Host>
  }
}
