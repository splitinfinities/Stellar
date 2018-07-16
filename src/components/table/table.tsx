import { Component, Element, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-table',
  styleUrl: 'table.css'
})
export class Table {
  @Element() element: HTMLElement;

  @Prop() name: string;
  @Prop() upgrade: boolean = false;
  @Prop() chart: boolean = false;
  @Prop() striped: boolean = false;

  @Listen('change')
  tableChangeHandler() {
    if (this.chart) {
      this.element.querySelector('stellar-chart').refresh();
    }
  }

  componentWillLoad() {
    if (this.chart) {
      this.element.querySelector('table').id = this.name;
    }
  }

  componentDidLoad() {
    if (this.chart) {
      this.element.querySelector('stellar-chart').refresh();
    }
  }

  render() {
    return [
      this.chart && <stellar-chart for={this.name}></stellar-chart>,
      this.upgrade ? <complete-table name={this.name}><slot></slot></complete-table> : <slot />
    ];
  }
}
