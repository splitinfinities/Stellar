import { Component, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'stellar-auto-scroll'
})
export class StellarAutoScroll {
  @Prop() speed: number = 2;
  @Prop() startPosition: number = 0;
  @Prop() loop: boolean = false;
  @Prop() autoplay: boolean = false;
  @State() timeout: any;

  componentDidLoad() {
    if (this.autoplay) {
      this.play()
    }
  }

  @Method()
  async play () {
    this.scroll();
  }

  @Method()
  async stop () {
    clearTimeout(this.timeout);
    this.timeout = undefined;
  }

  scroll () {
    window.scrollBy(0,1);
    this.timeout = setTimeout(this.scroll.bind(this), this.speed);

    if ((document.body.scrollHeight - window.innerHeight) == window.pageYOffset) {
      if (this.loop) {
        window.scrollTo(this.startPosition, 0);
      } else {
        this.stop()
      }
    }
  }
}
