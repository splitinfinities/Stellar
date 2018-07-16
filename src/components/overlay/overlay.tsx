import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-overlay',
  styleUrl: 'overlay.css'
})
export class Overlay {
  @Prop({ reflectToAttr: true }) open: boolean = false;
}
