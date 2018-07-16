import { Component, Method, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'stellar-modal',
  styleUrl: 'modal.css'
})
export class Modal {

  @Element() el: HTMLElement;

  @Prop() header: boolean = true;

  @Prop({reflectToAttr: true}) size: string;

  @Prop({reflectToAttr: true}) name: string;
  @Prop({reflectToAttr: true}) active: boolean = false;
  @Prop({reflectToAttr: true}) cloned: boolean = false;

  @State() originalContent: any;

  componentWillLoad() {
    this.originalContent = this.el.innerHTML;
  }

  @Method()
  open() {
    const controller = document.querySelector('stellar-modal-controller');
    controller.open(this.name, this.originalContent);
    return true;
  }

  @Method()
  close() {
    const controller = document.querySelector('stellar-modal-controller');
    controller.close();
    return true;
  }

  render() {
    return (
      <stellar-card padding="small">
        { this.header && <header>
          <slot name="title"></slot>
          <stellar-button tag="button" ghost size="large" class="close" onClick={() => { this.close(); }}>&times;</stellar-button>
        </header> }
        { !this.header && <stellar-button tag="button" ghost size="large" class="close" onClick={() => { this.close(); }}>&times;</stellar-button> }
        <slot />
      </stellar-card>
    )
  }
}
