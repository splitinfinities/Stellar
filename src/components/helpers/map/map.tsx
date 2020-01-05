import { Component, Host, h, Prop, Element, getAssetPath, Watch } from '@stencil/core';
import { asyncForEach } from '../../../utils';
import { } from 'googlemaps';

@Component({
  tag: 'stellar-google-maps',
  styleUrl: 'map.css',
  assetsDir: "themes"
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

  loaded: boolean = false;

  mapRef: google.maps.Map;
  bounds: google.maps.LatLngBounds;
  latLng: google.maps.LatLng;

  map: google.maps.Map;
  infowindow: google.maps.InfoWindow;

  markers = [];

  componentWillLoad() {
  }

  componentDidLoad() {
    this.loadGoogleMaps();
  }

  @Watch('theme')
  async handleTheme() {
    let styles = [];

    if (this.theme) {
      styles = await (await fetch(getAssetPath(`./themes/${this.theme}.json`))).json();
    }

    this.map.setOptions({ styles })
  }

  loadGoogleMaps() {
    const googleMapsUrl = `http://maps.google.com/maps/api/js?key=${this.apikey}&callback=initializeGoogleMap`;

    window["initializeGoogleMap"] = () => { this.initMap() };

    if (!window["loadingGoogleMaps"] && (!document.querySelectorAll(`[src="${googleMapsUrl}"]`).length || typeof google !== 'object' || typeof google.maps !== 'object')) {
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
      let styles: any = [];

      if (this.theme) {
        styles = await (await fetch(getAssetPath(`./themes/${this.theme}.json`))).json();
      }

      this.map = new google.maps.Map(this.el.querySelector('#map'), {
        center: { lat: this.lat, lng: this.lng },
        zoom: this.zoom,
        disableDefaultUI: this.noUi,
        gestureHandling: 'none',
        zoomControl: true,
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
