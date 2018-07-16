import { Component, Element, State, Prop, Method } from '@stencil/core';
import Highcharts from 'highcharts';
import Data from 'highcharts/modules/data';
import merge from 'deepmerge';
import { theme } from './options';

Data(Highcharts);

@Component({
  tag: 'stellar-chart',
  styleUrl: 'chart.css'
})

export class Chart {
  @Element() element: HTMLElement;
  @State() __chart: HTMLElement;
  @State() __options: any = {};
  @State() __data: any = {};
  @State() __highchart: Highcharts.ChartObject;
  @State() __informant: HTMLElement;

  @Prop() type: string = "column";
  @Prop() remote: string;
  @Prop() random: boolean;
  @Prop() for: string;

  @Method()
  options(newOptions: any) {
    this.__options = merge.all([this.__options, newOptions]);
  }

  @Method()
  data(data: any) {
    this.options({ data: data })
  }

  @Method()
  series(data: any) {
    this.options({ series: data })
  }

  componentWillLoad() {
    this.options(theme);
    this.options({ chart: { type: this.type } });
  }

  @Method()
  refresh() {
    if (this.for) {
      this.__informant = document.querySelector(`#${this.for}`);

      if (this.__informant) {
        this.data({ table: this.for });
      }
    }

    this.__mountChart();
  }

  componentDidLoad() {
    this.refresh();
  }

  __mountChart() {
    this.__chart = this.element.querySelector('.highchart');
    this.__highchart = Highcharts.chart(this.__chart, this.__options);
  }

  render() {
    return <div class="highchart" />;
  }
}
