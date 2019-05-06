import { Component, Prop, State, Element, Listen} from '@stencil/core';
import { blurringEase } from '../../../utils';

@Component({
  tag: 'stellar-content',
  styleUrl: 'content.css',
  shadow: true
})

export class Content {
  @Element() element: HTMLElement;
  @Prop({mutable: true, reflectToAttr: true}) open: boolean = false;
  @Prop({mutable: true, reflectToAttr: true}) for: string;
  @Prop({mutable: true, reflectToAttr: true}) behavior: string;
  @State() ease: TweenInstance = blurringEase({
    end: 6,
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

  @State() blur: number = 0;
  @State() parent: any;

  @Listen("document:contentChange")
  async handleActive (event: CustomEvent) {
    this.parent = event.detail.parent;

    const contents = await this.parent.contents()

    if (event.detail.name !== this.element.id) {
      contents.forEach((element) => {
        element.open = element.id === event.detail.name;

        if (element.open) {
          this.ease.start()
        }
      });
    }
  }

  render() {
    return (
      <stellar-blur class="wrap" role="tabpanel" vertical={this.blur} aria-hidden={!this.open ? "true" : "false"}>
        <slot></slot>
      </stellar-blur>
    );
  }
}
