import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'web-audio-visualizer-shader',
  shadow: true
})

export class WebAudioVisualizerShader {
  @Prop() type: string;

  render() {
    return '';
  }
}
