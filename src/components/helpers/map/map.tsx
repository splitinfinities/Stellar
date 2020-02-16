import { Component, Host, h, Prop, Element, getAssetPath, Watch } from '@stencil/core';
import { asyncForEach } from '../../../utils';
import { } from 'googlemaps';
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-google-maps',
  styleUrl: 'map.css',
  assetsDirs: ["themes"]
})
export class Map {
  @Element() el: HTMLElement;

  @Prop() apikey: string;
  @Prop() lat: number = -34.397;
  @Prop() lng: number = 150.644;
  @Prop() zoom: number = 8;
  @Prop() width: number = 1600;
  @Prop() height: number = 900;
  @Prop() noUi: boolean = false;
  @Prop() block: boolean = false;
  @Prop() theme: string;
  @Prop() darkTheme: string;
  @Prop() gestureHandling: "greedy" | "cooperative" | "none" | "auto" = "auto";
  @Prop() zoomControls: boolean = false;
  @Prop() streetView: boolean = false;
  @Prop() mapType: boolean = false;
  @Prop() fullscreenControl: boolean = false;

  @Prop({ mutable: true }) dark: boolean;

  loaded: boolean = false;

  mapRef: google.maps.Map;
  bounds: google.maps.LatLngBounds;
  latLng: google.maps.LatLng;

  map: google.maps.Map;
  infowindow: google.maps.InfoWindow;

  markers = [];

  componentDidLoad() {
    this.loadGoogleMaps();
  }

  @Watch('theme')
  @Watch('dark')
  async handleTheme() {
    let styles = [];

    if (this.theme || this.darkTheme) {
      styles = await (await fetch(getAssetPath(`./themes/${(this.dark && this.darkTheme) ? this.darkTheme : this.theme}.json`))).json();
    }

    if (this.map) {
      this.map.setOptions({ styles });
    }

    return styles;
  }

  loadGoogleMaps() {
    const googleMapsUrl = `https://maps.google.com/maps/api/js?key=${this.apikey}&callback=initializeGoogleMap`;

    window["initializeGoogleMap"] = () => { this.initMap() };

    if (!window["loadingGoogleMaps"] && (typeof google !== 'object' || typeof google.maps !== 'object')) {
      window["loadingGoogleMaps"] = true;
      document.body.appendChild(Object.assign(
        document.createElement('script'), {
        type: 'text/javascript',
        src: googleMapsUrl,
        onload: () => this.initMap()
      }));
    } else if (typeof google === 'object' && typeof google.maps === 'object') {
      this.initMap();
    }
  }

  async initMap() {
    if (this.apikey) {
      let styles: any = await this.handleTheme();

      this.map = new google.maps.Map(this.el.querySelector('#map'), {
        center: { lat: this.lat, lng: this.lng },
        zoom: this.zoom,
        disableDefaultUI: this.noUi,
        gestureHandling: this.gestureHandling,
        zoomControl: this.zoomControls,
        streetViewControl: this.streetView,
        mapTypeControl: this.mapType,
        fullscreenControl: this.fullscreenControl,
        styles
      });

      this.infowindow = new google.maps.InfoWindow();

      this.initMarkers();
      this.hideLoader();
    }
  }

  async initMarkers() {
    const markerEls = this.el.querySelectorAll('stellar-google-maps-marker');

    await asyncForEach(markerEls, async (markerEl) => {
      const marker = new google.maps.Marker(await markerEl.configuration(this.map));

      marker.addListener('click', () => {
        this.infowindow.setContent(markerEl.innerHTML);
        this.infowindow.open(this.map, marker);
      });

      this.markers.push(marker);
    })
  }

  hideLoader() {
    this.loaded = true;
  }

  render() {
    return <Host intrinsicsize={`${this.width} x ${this.height}`} style={{
      "--width": `${this.width}px`,
      "--height": `${this.height}px`,
      "--aspect-ratio": `${this.height / this.width}`
    }} >
      <skeleton-img width={this.width} height={this.height} loading style={{ "opacity": `${this.loaded ? 0 : 1}` }} />
      <div id="map" />
    </ Host>
  }
}

Tunnel.injectProps(Map, ['dark']);