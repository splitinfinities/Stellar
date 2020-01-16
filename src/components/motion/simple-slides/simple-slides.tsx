import { Component, Element, Prop, State, h, Host, Listen } from '@stencil/core';
import "ionicons";

@Component({
  tag: 'stellar-simple-slides',
  styleUrl: 'simple-slides.css',
  shadow: true
})
export class SimpleSlides {
  @Element() el!: HTMLElement

  /**
   * Show or hide the pager
   */
  @Prop() pager = false;

  /**
   * Show or hide the pager
   */
  @Prop() padding: string = "1rem";

  /**
   * Show or hide the pager
   */
  @State() active: number[] = [];

  /**
   * Show or hide the pager
   */
  @State() first: boolean = true;

  /**
   * Show or hide the pager
   */
  @State() last: boolean = false;

  slides!: NodeListOf<HTMLStellarSlideElement>;

  componentWillLoad() {
    this.slides = this.el.querySelectorAll("stellar-slide");

    this.slides.forEach((slide: HTMLStellarSlideElement, index) => {
      slide.setAttribute("tabIndex", "0");
      slide.slideId = index;
    })
  }

  scrollToSlide(element) {
    element.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }

  next() {
    const lastVisible = Array.from(this.el.shadowRoot.querySelectorAll('.pager > button.visible'));
    const element = lastVisible[lastVisible.length - 1].nextSibling;
    // @ts-ignore
    element.click()
  }

  previous() {
    const firstVisible = Array.from(this.el.shadowRoot.querySelectorAll('.pager > button.visible'));
    const element = firstVisible[0].previousSibling;
    // @ts-ignore
    element.click()
  }

  @Listen('switched')
  handleSwitched(e) {
    if (this.pager) {
      if (e.detail.visible) {
        this.active = [...this.active, e.detail.slideId]
      } else {
        this.active = this.active.filter((item) => {
          return item !== e.detail.slideId;
        })
      }
    }

    if (e.detail.visible) {
      if (e.detail.slideId === 0) {
        this.first = true;
      } else {
        this.first = false;
      }

      if (e.detail.slideId === (this.slides.length - 1)) {
        this.last = true;
      } else {
        this.last = false;
      }
    }
  }

  render() {
    return <Host tabIndex={0} style={{ '--padding': this.padding }}>
      <button class={`nav prev ${this.first ? "hide" : ""}`} onClick={this.previous.bind(this)}><ion-icon name="arrow-round-back" /></button>
      <button class={`nav next ${this.last ? "hide" : ""}`} onClick={this.next.bind(this)}><ion-icon name="arrow-round-forward" /></button>
      {this.pager && this.slides && <div class="pager">{Array.from(this.slides).map((e, i) => <button onClick={() => this.scrollToSlide(e)} class={this.active.includes(i) ? "visible" : ""}>Slide {i}</button>)}</div>}
      <div class="wrapper">
        <slot />
      </div>
    </Host>
  }
}
