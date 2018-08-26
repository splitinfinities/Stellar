import { Component, Prop, State, Method, Element } from '@stencil/core';

@Component({
  tag: 'stellar-modal-controller',
  styleUrl: 'modal-controller.css'
})
export class ModalController {
  @Element() element: HTMLElement;

  @Prop({reflectToAttr: true, mutable: true}) state: string|"opening"|"open"|"closing"|"closed"|"empty" = "empty";
  @Prop() timing: number = 500;

  @Prop({mutable: true, reflectToAttr: true}) size: string;

  @State() current: HTMLStellarModalElement;
  @State() event: boolean = false;

  componentWillLoad() {
    this.handleKeyDown();
  }

  eventListener (e) {
    if ( (e.key=='Escape'||e.key=='Esc'||e.keyCode==27) ) {
      e.preventDefault();
      this.close();
      return false;
    }
  }

  handleKeyDown() {
    if (!this.event) {
      window.addEventListener('keydown', (e) => { this.eventListener(e) }, true);
      this.event = true
    }
  }

  wait(time: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  @Method()
  async open(modalName, originalContent): Promise<boolean> {
    if (this.state === "open" || this.state === "opening" ) {
      await this.close();
    }

    this.state = "cloning";

    if (!this.element.querySelector(`stellar-modal[name="${modalName}"]`)) {
      let element: HTMLStellarModalElement = document.querySelector(`stellar-modal[name="${modalName}"]`);
      // @ts-ignore
      element = element.cloneNode();
      element.cloned = true;
      element.innerHTML = originalContent;
      this.size = element.size || "";
      this.element.querySelector('.modal-controller-wrapper').appendChild(element);
      this.current = this.element.querySelector(`stellar-modal[name="${element.name}"]`);
      this.state = "opening";
      await this.wait(this.timing);
      this.state = "open";
      return true;
    } else {
      this.state = "errored";
      this.close();
      return false;
    }
  }

  @Method()
  async close() {
    if (this.state === "open") {
      try {
          this.state = "closing";
          await this.wait(this.timing);
          this.state = "closed";
          this.element.querySelector('.modal-controller-wrapper').removeChild(this.current);
          this.state = "empty";
      } catch (e) {
        this.state = "empty";
      }
    }

    return true
  }

  render() {
    return [
      <stellar-overlay onClick={() => {this.close()}} open={["opening","open","closing"].indexOf(this.state) > -1}></stellar-overlay>,
      <div class="modal-controller-wrapper">
        <slot></slot>
      </div>
    ]
  }
}
