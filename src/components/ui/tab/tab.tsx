import { Component, Prop, State, Element, Listen, Event, EventEmitter } from '@stencil/core'
import properties from 'css-custom-properties'
import { blurringEase } from '../../../global/helpers';

@Component({
  tag: 'stellar-tab',
  styleUrl: 'tab.css',
})

export class Tab {
  @Element() element: HTMLElement

  @Prop({mutable: true, reflectToAttr: true}) href: string = "#"
  @Prop({mutable: true, reflectToAttr: true}) tag: string = "button"
  @Prop() disabled: boolean = false
  @Prop({mutable: true, reflectToAttr: true}) open: boolean = false
  @Prop() notifications: boolean|number = false

  @State() parent: any

  @Event() contentChange: EventEmitter;

  componentWillLoad () {
    this.parent = this.element.closest('stellar-tabs')
  }

  @Listen("window:resize")
  handleResize() {
    this.handleIndicatorPosition()
  }

  componentDidLoad() {
    this.handleIndicatorPosition()
  }

  handleClick(e) {
    this.parent.tabs().forEach((element) => {
      element.open = false
    })

    this.open = true

    this.handleIndicatorPosition()

    if (this.open) {
      blurringEase((data: number) => {
        this.parent.blurring = data * 10
      }, 220, 0, 'quadratic', { endToEnd: true, invert: false })
    }

    if (!this.disabled && this.tag !== "a") {
      e.preventDefault()

      this.contentChange.emit({
        parent: this.parent,
        name: this.href.replace(/[#]/g, "")
      });
    }
  }

  handleIndicatorPosition() {
    if (this.open && this.parent && this.parent.nodeName === "STELLAR-TABS") {
      properties.set({
        "--tab-left": `${this.element.offsetLeft}px`,
        "--tab-width": `${this.element.offsetWidth}px`
      }, this.parent)
    }
  }

  renderNotifications() {
    return this.notifications && <stellar-tag>{this.notifications}</stellar-tag>
  }

  renderTitle() {
    return (
      <span class="title">
        <slot></slot>
      </span>
    )
  }

  render() {
    return (
      <div class="tab-wrap">
        <this.tag href={this.href} tabindex="0" class="tab-button" onClick={(e) => this.handleClick(e)}>
          {this.renderNotifications()}
          {this.renderTitle()}
        </this.tag>
      </div>
    )
  }
}
