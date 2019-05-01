import { Component, Element, State, Prop, Method, Watch } from '@stencil/core';
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

  @Watch('config')
  handleConfig() {
    if (this.config) {
      this.options(this.config.serialize());
    }
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
  options(newOptions: any) {
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

    this.__options = merge.all([this.__options, newOptions, theme]);

    Highcharts.setOptions({
      lang: {
        thousandsSep: ','
      }
    });

    this.refresh()
  }

  @Method()
  get_options() {
    return this.__options
  }

  @Method()
  refresh() {
    this.__chart = this.element.shadowRoot.querySelector('.highchart');
    if (this.__chart) {
      this.__highchart = Highcharts.chart(this.__chart, this.__options);
    }
  }

  render() {
    return <div class="highchart" />;
  }
}
