import { Component, State, Listen, Element, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-mouse-trail',
  styleUrl: 'mouse-trail.css'
})
export class StellarMouseTrail {
  @Element() element: HTMLElement;

  @Prop() count: number = 12;
  @Prop() speed: number = .5;
  @Prop() threedee: boolean = false;

  @State() dots: Dot[] = [];
  @State() mouse: {x: number, y: number} = { x: 0, y: 0 };

  componentWillLoad() {
    const el = this.element.querySelector('*:first-of-type');

    for (var i = 0; i < this.count; i++) {
      var d = new Dot(el, this.threedee, this.count, i);
      this.dots.push(d);
    }
  }

  componentDidLoad() {
    this.animate();
  }

  draw() {
    let x = this.mouse.x;
    let y = this.mouse.y;

    this.dots.forEach((dot, index, dots) => {
      var nextDot = dots[index + 1] || dots[0];

      dot.x = x;
      dot.y = y;
      dot.draw();

      x += (nextDot.x - dot.x) * this.speed;
      y += (nextDot.y - dot.y) * this.speed;
    });
  }

  animate () {
    this.draw();
    requestAnimationFrame(this.animate.bind(this));
  }

  @Listen('mousemove', {target: "window"})
  handleMouseMove(event) {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  }
}

class Dot {
  public x = 0;
  public y = 0;
  public z = 0;

  public node;

  constructor(element, threedee, count, current) {
      var node = element.cloneNode();
      node.className = "stellar-mouse-trail-element";
      if (threedee) {
        this.z = count - current;
      } else {
        node.style.zIndex = count - current;
      }
      document.body.appendChild(node);
      this.node = node;
  }

  draw = function() {
    this.node.style.transform = `translate3d(calc(${this.x}px - 50%), calc(${this.y}px - 50%), ${this.z}px)`;
  };
};
