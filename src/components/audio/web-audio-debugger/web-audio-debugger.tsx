import { Component, State, Prop, Method, h } from '@stencil/core';

@Component({
  tag: 'web-audio-debugger',
  styleUrl: 'web-audio-debugger.css',
  shadow: true
})

export class WebAudioDebugger {

  @State() history: History[] = [];
  @Prop() count: number = 50;

  @Method()
  async addHistory(string: History) {
    let our_history = [
      string,
      ...this.history
    ];

    if (our_history.length > this.count) {
        this.history = our_history.slice(1, this.count);
    } else {
        this.history = our_history;
    }
  }

    render() {
      return (
        <div>
          {this.history.map((log) =>
            <div>
              <p>{log}</p>
            </div>
          )}
        </div>
      )
    }
}
