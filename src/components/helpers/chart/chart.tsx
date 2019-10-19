import { Component, Element, State, Prop, Method, Watch, h } from '@stencil/core';
import Tunnel from '../../theme';
import Highcharts from 'highcharts'
import Data from 'highcharts/modules/data';
import { theme, HighchartsModel } from './options';
import { shuffle, colors } from '../../../utils';

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

    this.__options = {...this.__options, ...theme, ...newOptions};

    if (!newOptions.colors) {
      this.__options = {...this.__options, ...{colors: shuffle([colors.base, ...colors.red.filter((_, key) => key >= 5), ...colors.orange.filter((_, key) => key >= 5), ...colors.yellow.filter((_, key) => key >= 5), ...colors.green.filter((_, key) => key >= 5), ...colors.blue.filter((_, key) => key >= 5), ...colors.violet.filter((_, key) => key >= 5), ...colors.cyan.filter((_, key) => key >= 5), ...colors.fuschia.filter((_, key) => key >= 5), ...colors.gray.filter((_, key) => key >= 5), ...colors.indigo.filter((_, key) => key >= 5), ...colors.lime.filter((_, key) => key >= 5), ...colors.pink.filter((_, key) => key >= 5), ...colors.teal.filter((_, key) => key >= 5)])}}
    }

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
