import { Component, Prop, State, Element, Listen, Event, EventEmitter, h } from '@stencil/core'
import { properties, delay } from '../../../utils'
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-tab',
  styleUrl: 'tab.css',
  shadow: true
})

export class Tab {
  @Element() element: HTMLElement

  @Prop({mutable: true, reflect: true}) name: string;
  @Prop() disabled: boolean = false
  @Prop({mutable: true, reflect: true}) open: boolean = false
  @Prop({mutable: true, reflect: true}) dark: boolean = false
  @Prop() notifications: boolean|number = false
  @Prop() tag: "button"|"link"|"route-link" = "button";

  /**
  * Sets the href on the anchor tag if the button is a link.
  */
  @Prop() href: string = '#';

  /**
   * Sets the target on the anchor tag if the button is a link.
   */
  @Prop() target: string = '_self';

  @Prop({reflect: true}) order: number
  @Prop({reflect: true}) tabCount: number
  @Prop({reflect: true}) vertical: boolean = false

  @State() parent: any

  @Event() contentChange: EventEmitter;

  componentWillLoad () {
    this.parent = this.element.closest('stellar-tabs')
  }

  @Listen("resize", {target: 'window'})
  handleResize() {
    this.handleIndicatorPosition()
  }

  componentDidLoad() {
    this.handleIndicatorPosition()
  }

  async handleClick(e) {
    const tabs = await this.parent.tabs()

    tabs.forEach((element) => {
      element.open = false
    })

    this.open = true

    this.handleIndicatorPosition()

    if (!this.disabled) {
      e.preventDefault()

      if (this.tag === "button") {
        this.contentChange.emit({
          parent: this.parent,
          name: this.name.replace(/[#]/g, "")
        });
      } else if (this.tag === "link") {
        await delay(350)
        window.location.href = this.href;
      }
    }
  }

  handleIndicatorPosition() {
    if (this.open && this.parent && this.parent.nodeName === "STELLAR-TABS") {
      // this.parent.blurring()
      if (this.parent.vertical) {
        properties.set({
          "--tab-top": `${this.element.offsetTop}px`,
          "--tab-height": `${this.element.offsetHeight}px`
        }, this.parent)
      } else {
        properties.set({
          "--tab-left": `${this.element.offsetLeft}px`,
          "--tab-width": `${this.element.offsetWidth}px`
        }, this.parent)
      }
    }
  }

  renderNotifications() {
    return this.notifications && <stellar-tag>{this.notifications}</stellar-tag>
  }

  renderTitle() {
    return <span class="title">
      <slot></slot>
    </span>
  }

  renderButton() {
    return (
      <button role="tab" type="button" disabled={this.disabled} aria-selected={this.open ? "true" : "false" } aria-setsize={this.tabCount} aria-posinset={this.order} tabindex="0" class="tab-button" onClick={(e) => this.handleClick(e)}>
        {this.renderNotifications()}
        {this.renderTitle()}
      </button>
    );
  }

  renderLink() {
    return (
      <a role="tab" href={this.href} target={this.target} class="tab-button" data-disabled={this.disabled} onClick={(e) => { this.handleClick(e) }}>
        {this.renderNotifications()}
        {this.renderTitle()}
      </a>
    );
  }

  renderAppLink() {
    return (
      <stencil-route-link role="tab" url={this.href} anchorClass="tab-button" data-disabled={this.disabled} onClick={(e) => { this.handleClick(e) }}>
        {this.renderNotifications()}
        {this.renderTitle()}
      </stencil-route-link>
    );
  }

  render() {
    return <div class="tab-wrap">
      { this.tag === "button" && this.renderButton() }
      { this.tag === "link" && this.renderLink() }
      { this.tag === "route-link" && this.renderAppLink() }
    </div>
  }
}
Tunnel.injectProps(Tab, ['dark']);
