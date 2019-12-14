import { Component, Prop, State, Element, Listen, h, Watch } from '@stencil/core';
import { blurringEase } from '../../../utils';

@Component({
  tag: 'stellar-content',
  styleUrl: 'content.css',
  shadow: true
})

export class Content {
  @Element() element: HTMLElement;
  @Prop({mutable: true, reflect: true}) open: boolean = false;
  @Prop({mutable: true, reflect: true}) for: string;
  @Prop({mutable: true, reflect: true}) behavior: string;
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

  tab!: HTMLStellarTabElement

  componentWillLoad() {
    this.tab = document.querySelector(`stellar-tabs[name="${this.for}"] stellar-tab[href="#${this.element.id}"]`);

    if (window.location.hash && this.element.id.includes(window.location.hash)) {
      this.open = true;
      this.tab.activate();
    }
  }

  @Watch("open")
  handleOpen() {
    this.element.scrollIntoView(true)
  }

  @Listen("contentChange", {target: 'document'})
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
      <div class="wrap" role="tabpanel" aria-hidden={!this.open ? "true" : "false"}>
        <slot></slot>
      </div>
    );
  }
}
