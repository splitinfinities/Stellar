import { Component, Prop, State, Element, Method } from '@stencil/core';
import properties from 'css-custom-properties'
import mediumZoom from 'medium-zoom'
import { ColorThief } from './vendor/colorThief.js'

@Component({
  tag: 'stellar-image',
  styleUrl: 'image.css',
  assetsDir: 'vendor',
  shadow: true
})

export class StellarImage {
  @Element() element: HTMLElement;
  @State() figure: HTMLElement;

  @Prop() preload: string;

  @Prop() width: number;
  @Prop() height: number;

  @Prop() bg: string = "auto";

  @State() aspectRatio: number;

  @State() sources: Array<any> = [];

  @State() io: IntersectionObserver;
  @State() active: boolean = false;

  @State() zoom;
  @State() palette;

  componentWillLoad() {
    this.setBG();
    this.prepareSources();
    this.updateAspectRatio();
  }

  componentDidLoad() {
    this.addIntersectionObserver();
    this.figure = this.element.shadowRoot.querySelector('figure');
    this.zoom = mediumZoom(this.element.shadowRoot.querySelector('.placeholder'), {
      background: 'var(--theme-base5)',
      scrollOffset: 1,
      margin: 30
    });

    this.zoom.addEventListeners('hidden', () => {
      document.querySelector('stellar-overlay').open = false
    })
  }

  @Method()
  medium() {
    return this.zoom
  }

  handleImage() {
    this.active = true;
  }

  addIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any) => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          this.handleImage();
          this.removeIntersectionObserver();
        }
      })

      this.io.observe(this.element.shadowRoot.querySelector('figure'));
    } else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => {
        this.handleImage();
      }, 300);
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  setBG() {
    if (this.bg === "auto") {
      const img = new Image(80, 80);
      img.onload = () => {
        const cf = new ColorThief();
        this.palette = cf.getPalette(img)

        properties.set({
          "--bg": `rgb(${this.palette[0][0]}, ${this.palette[0][1]}, ${this.palette[0][2]})`
        }, this.element);

        this.zoom.update({
          background: `rgb(${this.palette[0][0]}, ${this.palette[0][1]}, ${this.palette[0][2]})`
        })
      }
      img.src = this.preload;
      img.crossOrigin = "Anonymous";
    } else {
      properties.set({
        "--bg": `${this.bg}`
      }, this.element);
    }
  }

  prepareSources() {
    const sources = this.element.querySelectorAll("source");

    let sourcesArray = [];

    [].forEach.call(sources, (source) => {
      sourcesArray = [...sourcesArray, source];
    });

    this.sources = sourcesArray;
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
      this.figure.classList.add('loaded');

      return [
        this.sources.map((source) =>
          <source srcSet={source.srcset} media={source.media} />
        ),
        <img src={this.preload} class="final_image" />
      ]
    }
  }

  render() {
    return (
      <figure itemtype="http://schema.org/ImageObject" onClick={() => { this.zoom.show() }}>
        <div class="overlay"></div>
        <picture>
          { this.renderPicture() }
        </picture>
        <img src={this.preload} class="placeholder" data-zoom-target={this.sources[0].srcset} />
      </figure>
    );
  }
}
