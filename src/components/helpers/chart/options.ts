import Highcharts, {Options, AccessibilityOptions, AnnotationsOptions, BoostOptions, ChartOptions, ColorAxisOptions, ColorString, ConnectorsOptions, CreditsOptions, DataOptions, DrilldownOptions, ExportingOptions, GlobalOptions, LabelsOptions, LangOptions, LegendOptions, LoadingOptions, MapNavigationOptions, NavigationOptions, NavigatorOptions, NoDataOptions, PaneOptions, PlotOptions, RangeSelectorOptions, ResponsiveOptions, ScrollbarOptions, SeriesOptionsType, StockToolsOptions, SubtitleOptions, TimeOptions, TitleOptions, TooltipOptions, XAxisOptions, YAxisOptions, ZAxisOptions} from 'highcharts';

// @ts-ignore
Highcharts.wrap(Highcharts.Tooltip.prototype, 'refresh', function (p, point, mouseEvents) {
  p.call(this, point, mouseEvents);

  const label = this.label;

  if (label && point) {
    label.attr({
      fill: point.series.color || point.color
    });
  }
});

Highcharts.setOptions({
  exporting: {
    chartOptions: {
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true
                }
            }
        }
    },
    fallbackToExportServer: false
  },
  lang: {
    thousandsSep: ','
  }
});

export const theme: Highcharts.Options = {
  exporting: {
    enabled: true,
    chartOptions: {
      chart: {
          style: {
            fontFamily: 'Arial'
          }
      }
    },
    fallbackToExportServer: false
  },
  chart: {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "1rem"
    }
  },
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  },
  series: [],
  legend: {
    backgroundColor: "white",
  },
  credits: {
    enabled: false
  },
  tooltip: {
    borderColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 9,
    style: {
      color: 'white',
      fontWeight: 'bold',
      borderWidth: 1,
      borderColor: 'white',
      borderStyle: 'solid'
    }
  }
};

export class HighchartsModel implements Options {
  accessibility?: AccessibilityOptions;
  annotations?: Array<AnnotationsOptions>;
  boost?: BoostOptions;
  chart?: ChartOptions;
  colorAxis?: ColorAxisOptions;
  colors?: Array<ColorString>;
  connectors?: ConnectorsOptions;
  credits?: CreditsOptions;
  data?: DataOptions;
  defs?: any;
  drilldown?: DrilldownOptions;
  exporting?: ExportingOptions;
  global?: GlobalOptions;
  labels?: LabelsOptions;
  lang?: LangOptions;
  legend?: LegendOptions;
  loading?: LoadingOptions;
  mapNavigation?: MapNavigationOptions;
  navigation?: NavigationOptions;
  navigator?: NavigatorOptions;
  noData?: NoDataOptions;
  pane?: PaneOptions;
  plotOptions?: PlotOptions;
  rangeSelector?: RangeSelectorOptions;
  responsive?: ResponsiveOptions;
  scrollbar?: ScrollbarOptions;
  series?: Array<SeriesOptionsType>;
  stockTools?: (object|StockToolsOptions);
  subtitle?: SubtitleOptions;
  time?: TimeOptions;
  title?: TitleOptions;
  tooltip?: TooltipOptions;
  xAxis?: (XAxisOptions|Array<XAxisOptions>);
  yAxis?: (YAxisOptions|Array<YAxisOptions>);
  zAxis?: (ZAxisOptions|Array<ZAxisOptions>);

  serialize?(): any {
    return this
  }
}
