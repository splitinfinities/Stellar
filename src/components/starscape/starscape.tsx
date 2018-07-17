import { Component, Listen, Element } from '@stencil/core';
import properties from 'css-custom-properties'

@Component({
  tag: 'stellar-starscape',
  styleUrl: 'starscape.css'
})
export class Starscape {
  @Element() element: HTMLElement;

  @Listen('window:scroll')
  handleScroll() {
    let onconstrainedY = window.pageYOffset / 15
    let percentageY = onconstrainedY;

    if (percentageY > 100) {
      percentageY = 100;
    } else if (percentageY < 0) {
      percentageY = 0;
    }

    properties.set({
      "--y-pos": `${percentageY}%`,
      "--star-y-pos": `${onconstrainedY}%`,
      "--rotate": `${onconstrainedY}deg`,
    }, this.element)
  }
}
