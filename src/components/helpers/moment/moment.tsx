import { Component, Prop, State, Watch } from '@stencil/core';
import moment from 'moment';

@Component({
  tag: 'moment-time',
  styleUrl: 'moment.css'
})
export class MomentTime {
  @Prop() value: string;
  @Prop() format: string = "MMMM Do YYYY, h:mm:ss a";
  @Prop() relative: boolean = false;
  @State() instance: any;
  @State() result: string;

  componentWillLoad() {
    this.prepareResult();
  }

  @Watch('value')
  prepareResult() {
    this.instance = moment(this.value);

    if (this.relative) {
      this.result = this.instance.fromNow();
    } else {
      this.result = this.instance.format(this.format);
    }
  }

  render () {
    return this.result;
  }
}
