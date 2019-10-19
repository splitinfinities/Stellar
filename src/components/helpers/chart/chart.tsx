import { Component, Element, State, Prop, Method, Watch, h } from '@stencil/core';
import Tunnel from '../../theme';
import Highcharts from 'highcharts'
import Data from 'highcharts/modules/data';
import merge from 'deepmerge';
import { theme, HighchartsModel } from './options';

Data(Highcharts);

@Component({
  tag: 'stellar-chart',
  styleUrl: 'chart.css',
  shadow: true
})
export class Chart {
  @Element() element: HTMLElement;
  @State() __chart: HTMLElement;
  @State() __options: any = {};
  @State() __data: any = {};
  @State() __highchart: Highcharts.Chart;
  @State() __informant: HTMLElement;

  @Prop() type: "area"|"areaspline"|"bar"|"bubble"|"column"|"line"|"pie"|"polygon"|"scatter"|"spline"|"waterfall";
  @Prop() remote: string;
  @Prop() for: string;
  @Prop() config: HighchartsModel = new HighchartsModel;
  @Prop({reflect: true}) dark: boolean = false;

  @Watch('config')
  handleConfig() {
    this.options(this.config);
  }

  @Watch('type')
  @Watch('for')
  handleAttrs() {
    this.options({})
  }

  componentDidLoad() {
    this.options(theme);
    this.refresh();
  }

  @Method()
  async options(newOptions: any) {
    this.__options = {
      ...this.__options,
      chart: {
        type: this.type
      },
      data: {
        table: this.for
      },
      series: [],
      ...{ xAxis: { categories: [] } },
      ...{ yAxis: { categories: [] } }
    };

    this.__options = merge.all([this.__options, theme, newOptions]);

    Highcharts.setOptions({
      lang: {
        thousandsSep: ','
      }
    });

    this.refresh()
  }

  @Method()
  async get_options() {
    return this.__options
  }

  @Method()
  async refresh() {
    this.__chart = this.element.shadowRoot.querySelector('.highchart');
    if (this.__chart) {
      this.__highchart = Highcharts.chart(this.__chart, this.__options);
    }
  }

  render() {
    return <div class="highchart" />;
  }
}
Tunnel.injectProps(Chart, ['dark']);
