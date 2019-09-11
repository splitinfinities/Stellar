import { Component, Host, h, Prop, State, Watch, Element } from '@stencil/core';

@Component({
  tag: 'stellar-clock',
  styleUrl: 'clock.css',
  shadow: true
})
export class Clock {
  @Element() element: HTMLElement;

  @Prop({mutable: true}) time: string|Date;
  @Prop({mutable: true}) between: string|Date;
  @Prop() size: number = 200;
  @Prop() animated: boolean;

  @State() hourAngle: number;
  @State() minuteAngle: number;
  @State() secondAngle: number;

  componentWillLoad() {
    this.handleTime();
    this.handleBetween();
  }

  componentDidLoad () {
    this.handleBetween();
  }

  @Watch('time')
  handleTime() {
    if (typeof this.time === "string") {
      this.time = new Date(this.time)
    } else if (!this.time) {
      this.time = new Date()
    }

    this.hourAngle = 360 * this.time.getHours() / 12;
    this.minuteAngle = 360 * this.time.getMinutes() / 60;
    this.secondAngle = 360 * this.time.getSeconds() / 60;
  }

  @Watch('between')
  @Watch('size')
  handleBetween() {
    if (typeof this.between === "string") {
      this.between = new Date(this.between)
    }

    if (this.element.shadowRoot.querySelector("stellar-chart")) {
      this.element.shadowRoot.querySelector("stellar-chart").options(this.chartConfig);
    }
  }

  get duration() {
    if (this.time.constructor === Date && this.between.constructor === Date) {
      // @ts-ignore
      return this.between.getHours() - this.time.getHours();
    }
  }

  get offset() {
    if (this.time.constructor === Date) {
      // @ts-ignore
      return this.time.getHours()
    }
  }

  get chartConfig () {
    // @ts-ignore
    const remainder = 24 - (this.offset + this.duration);

    console.log("start", this.offset)
    console.log("duration", this.duration)
    console.log("end", remainder)

    return {
      chart: {
        type: 'pie',
        margin: 0,
        padding: 0,
        plotShadow: false,
        plotBackgroundColor: "transparent",
        backgroundColor: "transparent",
        height: this.size,
        width: this.size,
      },
      title: false,
      tooltip: {
        enabled: false
      },
      plotOptions: {
        series: {
          dataLabels: false,
          animation: false
        },
        pie: {
          size: (this.size * .975)
        }
      },
      series: [{
        name: 'Brands',
        data: [
          {
            color: "transparent",
            borderColor: "transparent",
            y: this.offset
          },{
            y: this.duration,
            color: "var(--theme-base5)",
            borderColor: "var(--black)",
            borderWidth: this.size * .0125
          }, {
            color: "transparent",
            borderColor: "transparent",
            y: remainder
          }
        ]
      }]
    }
  }

  render() {
    return (
      <Host style={{"--size": `${this.size}px`}}>
        <svg viewBox={`0 0 ${this.size} ${this.size}`}>
            <g>
                <circle id="circle" style={{"stroke": "var(--theme-base5)", "stroke-width": `${this.size * .02}px`, "fill":"var(--theme-base0)"}} cx={this.size / 2} cy={this.size / 2} r={this.size / 2 * .95}></circle>
            </g>

          </svg>
          {this.between && <stellar-chart type="pie" id="chart" />}

          <svg class="above" viewBox={`0 0 ${this.size} ${this.size}`}>
            <g>
                <line
                  x1={this.size / 2}
                  y1={this.size / 2}
                  x2={this.size / 2}
                  y2={this.size * .7}
                  transform={`rotate(${this.hourAngle - 180} ${this.size / 2} ${this.size / 2})`}
                  style={{"stroke-width": `${this.size * .03}px`,"stroke": "var(--theme-base9)"}}
                  id="hourhand"
                />

                <line
                  x1={this.size / 2}
                  y1={this.size / 2}
                  x2={this.size / 2}
                  y2={this.size * .8}
                  transform={`rotate(${this.minuteAngle - 180} ${this.size / 2} ${this.size / 2})`}
                  style={{"stroke-width": `${this.size * .04}px`,"stroke": "var(--theme-base7)"}}
                  id="minutehand"
                />

                <line
                  x1={this.size / 2}
                  y1={this.size / 2}
                  x2={this.size / 2}
                  y2={this.size * .9}
                  transform={`rotate(${this.secondAngle - 180} ${this.size / 2} ${this.size / 2})`}
                  style={{"stroke-width": `${this.size * .02}px`,"stroke": "var(--theme-base3)"}}
                  id="secondhand"
                />
            </g>

            <circle
              id="center"
              style={{"fill":"var(--theme-base0)","stroke": "var(--theme-base3)","stroke-width": `5px`}}
              cx={this.size / 2}
              cy={this.size / 2}
              r={this.size * .02}
            />

            {Array(12).fill("").map((_, i) => <line x1={this.size / 2} y1={(this.size / 100) + (this.size / 8)} x2={this.size / 2} y2={(this.size / 100) + (this.size / 50)} transform={`rotate(${30 * i} ${this.size/2} ${this.size/2})`} style={{"stroke": "#000", "stroke-width": `${this.size / 80}px`}} />)}
          </svg>

        <stellar-tooltip align="bottom-center">{(typeof this.time === "object" ) && this.time.toLocaleTimeString('en-US')}</stellar-tooltip>
      </Host>
    );
  }

}
