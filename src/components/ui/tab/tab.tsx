import { Component, Prop, State, Element, Listen, Event, EventEmitter} from '@stencil/core'
import { properties } from '../../../utils'

@Component({
  tag: 'stellar-tab',
  styleUrl: 'tab.css',
  shadow: true
})

export class Tab {
  @Element() element: HTMLElement

  @Prop({mutable: true, reflectToAttr: true}) href: string = "#"
  @Prop({mutable: true, reflectToAttr: true}) tag: string = "button"
  @Prop() disabled: boolean = false
  @Prop({mutable: true, reflectToAttr: true}) open: boolean = false
  @Prop() notifications: boolean|number = false

  @Prop({reflectToAttr: true}) order: number
  @Prop({reflectToAttr: true}) tabCount: number

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

  async handleClick(e) {
    const tabs = await this.parent.tabs()

    tabs.forEach((element) => {
      element.open = false
    })

    this.open = true

    this.handleIndicatorPosition()

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

  render() {
    const Tag = this.tag;

    // @ts-ignore
    return <div class="tab-wrap"><Tag role="tab" aria-selected={this.open ? "true" : "false" } aria-setsize={this.tabCount} aria-posinset={this.order} href={this.href} tabindex="0" class="tab-button" onClick={(e) => this.handleClick(e)}>{this.renderNotifications()}{this.renderTitle()}</Tag></div>
  }
}
