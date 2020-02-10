import { Component, Element, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'stellar-blur',
  styleUrl: 'blur.css'
})
export class Blur {
  @Element() element: HTMLElement;

  @Prop({ mutable: true, reflect: true }) vertical: number = 0;
  @Prop({ mutable: true, reflect: true }) horizontal: number = 0;

  generatedId!: string;

  componentWillLoad() {
    if (this.supported()) {
      this.generatedId = this.element.id || this.generateId()
    }
  }

  supported_match() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') === -1 &&
      !(/iPad|iPhone|iPod/.test(navigator.platform))
  }

  supported() {
    const criteria = () => {
      let result;

      try {
        if (sessionStorage.getItem('blur-supported') === "true") {
          return sessionStorage.getItem('blur-supported') === "true";
        }

        result = this.supported_match()

        sessionStorage.setItem('blur-supported', result ? "true" : "false")


      } catch (e) {
        result = this.supported_match()
      }

      return result;
    }

    try {
      sessionStorage.clear()
    } catch (e) { }

    return criteria()
  }

  generateId() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    return `blur-${getRandomInt(0, 1000)}`;
  }

  render() {
    return this.supported() ? <Host id={this.element.id || this.generatedId} style={{ "--blur-url": `url('#${this.generatedId}-filter')` }}>
      <slot />
      <svg class="blur-svg">
        <defs>
          <filter id={this.generatedId + "-filter"}>
            <feGaussianBlur id={this.generatedId + "-gaussian"} in="SourceGraphic" stdDeviation={`${this.horizontal},${this.vertical}`} />
          </filter>
        </defs>
      </svg>
    </Host> : <slot />;
  }
}
