import { Component, Element, Prop, State, Method, Watch} from '@stencil/core';
import HyperList from "hyperlist";

@Component({
  tag: 'stellar-list',
  styleUrl: 'list.css'
})
export class List {
  @Element() element: HTMLElement;
  @Prop() itemHeight: number = 45;
  @State() container: HTMLElement;
  @State() list: HyperList;
  @Prop({mutable: true}) items: Array<any> = [];
  @State() indexed: boolean = false

  @State() config: Object = {
    height: 600,
    itemHeight: 45,
    total: 1000,
    reverse: false,
    scrollerTagName: 'div'
  };

  @Watch('items')
  dataObserver(value) {
    this.updateConfig({ total: value.length });
    this.refresh();
  }

  @Method()
  append(value) {
    this.items.push(value);
    this.refresh();
  }

  @Method()
  prepend(value) {
    this.items.unshift(value);
    this.refresh();
  }

  @Method()
  updateConfig(config) {
    const height = this.element.offsetHeight;

    const overrideScrollPosition = () => {
      return this.container.scrollTop - (this.element.offsetHeight / 2);
    }

    this.config = {...this.config, height: height, overrideScrollPosition: overrideScrollPosition, ...config}
  }

  componentWillLoad() {
    this.indexChildren();
    this.updateConfig({
      generate: (row) => { return this.generate(row); },
      itemHeight: this.itemHeight
    })
  }

  componentDidLoad() {
    this.indexed = true;
    this.container = this.element.querySelector('.list');
    this.mount()
  }

  generate(row) {
    const el = document.createElement('stellar-item');
    let d = this.items[row];
    d = {height: this.itemHeight, ...d};

    el.setAttribute("style", `--item-height: ${this.itemHeight}px;`)
    el.setAttribute("value", d.value || false)
    el.setAttribute("href", d.href || false)
    el.setAttribute("type", d.href ? "a" : "button")

    el.innerHTML = d.content;

    return el;
  }

  indexChildren() {
    const items = Array.from(this.element.querySelectorAll('stellar-item'));
    let data = [];

    console.log(items);

    items.forEach((item) => {
      data.push({
        ...item.attributes,
        content: item.innerHTML
      })
    })

    this.items = [...data, ...this.items];
  }

  @Method()
  mount() {
    if (this.indexed && this.items) {
      this.updateConfig({total: this.items.length});
      this.list = HyperList.create(this.container, this.config);
    }
  }

  @Method()
  refresh() {
    if (this.indexed) {
      this.list.refresh(this.container, this.config);
    }
  }

  render() {
    return [
      <div hidden={true}><slot /></div>,
      <div class="list"></div>
    ]
  }
}
