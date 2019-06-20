import { Component, Prop, State, Element, Method, Watch, h } from '@stencil/core';
import { delay, properties, mediumZoom } from '../../../utils';
import { ColorThief } from './vendor/colorThief.js';

@Component({
  tag: 'stellar-image',
  styleUrl: 'image.css',
  assetsDirs: ['./vendor'],
  shadow: true
})
export class Picture {
  @Element() element: HTMLElement;

  @Prop({mutable: true}) poster: string;
  @Prop({mutable: true}) large: string;
  @Prop({mutable: true, reflectToAttr: true }) type: "background"|"picture" = "picture";
  @Prop() width: number;
  @Prop() height: number;
  @Prop({reflectToAttr: true}) nozoom: boolean = false;
  @Prop({mutable: true}) bg: string = "auto";

  @State() aspectRatio: number;
  @State() sources: Array<any> = [];
  @State() active: boolean = false;
  @State() figure: HTMLElement;
  @State() zoom;
  @State() palette;

  componentWillLoad() {
    this.prepareSources();
    this.setBG();
    this.updateAspectRatio();
  }

  componentDidLoad() {
    this.figure = this.element.shadowRoot.querySelector('figure');
  }

  mountZoom() {
    let zoomable = this.element.shadowRoot.querySelector('img');

    this.zoom = mediumZoom(zoomable, {
      background: `${this.bg}`,
      scrollOffset: 1,
      margin: 30
    });
  }

  @Watch('poster')
  handlePosterChange () {
    this.setBG();
  }

  @Watch('active')
  handleActive() {
    this.setBackgroundImage();
  }

  @Method()
  async medium() {
    return this.zoom
  }

  async in() {
    this.active = true;

    if (!this.nozoom) {
      await delay(200);
      this.mountZoom();
    }
  }

  getPictureColor() {
    const img = new Image(80, 80);

    img.addEventListener('load', () => {
      const cf = new ColorThief();
      this.palette = cf.getColor(img)

      properties.set({
        "--background-color": `rgb(${this.palette[0]}, ${this.palette[1]}, ${this.palette[2]})`
      }, this.element);

      this.bg = `rgb(${this.palette[0]}, ${this.palette[1]}, ${this.palette[2]})`;

      if (this.zoom) {
        this.zoom.update({
          background: this.bg
        })
      }
    }, false);

    img.src = this.poster;
    img.crossOrigin = "Anonymous";
  }

  setBG() {
    if (this.bg === "auto") {
      this.getPictureColor();
    } else {
      properties.set({
        "--background-color": `${this.bg}`
      }, this.element);
    }
  }

  prepareSources() {
    const sources = this.element.querySelectorAll("source");

    let sourcesArray = [];

    [].forEach.call(sources, (source) => {
      sourcesArray = [...sourcesArray, source];
      source.hidden = true
    });

    this.sources = sourcesArray;
    this.poster = this.poster ? this.poster : this.sources[this.sources.length - 1].srcset;
    this.large = this.sources[0].srcset;

    this.setBackgroundImage();
  }

  setBackgroundImage() {
    properties.set({
      "--background-image": `url('${this.active ? this.large : this.poster}')`
    }, this.element);
  }

  updateAspectRatio() {
    this.aspectRatio = (this.height / this.width) * 100;

    properties.set({
      "--aspect_ratio": `${this.aspectRatio}%`,
      "--width": `${this.width}px`,
      "--height": `${this.height}px`,
    }, this.element);

  }

  renderPicture() {
    if (this.active) {
      return [
        this.sources.map((source) =>
          <source srcSet={source.srcset} media={source.media ? source.media : false} />
        ),
        <img src={this.large} class="final_image" />
      ]
    }
  }

  render() {
    if (this.type === "picture") {
      return <figure
        itemtype="http://schema.org/ImageObject"
        class={this.active ? 'loaded' : ''}
        onClick={() => { this.zoom && this.zoom.open() }}>
          <div class="overlay"></div>
          <picture>
            { this.renderPicture() }
          </picture>
          <div class="placeholder" style={{"background-image": `url(${this.poster})`}} />
          <stellar-intersection element={this.element} in={this.in.bind(this)}  />
      </figure>
    } else {
      return <stellar-intersection element={this.element} in={this.in.bind(this)} />
    }
  }
}
