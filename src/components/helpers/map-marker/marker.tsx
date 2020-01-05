import { Component, Method, Prop } from '@stencil/core';
import { } from 'googlemaps';

@Component({
  tag: 'stellar-google-maps-marker',
  shadow: true
})
export class Marker {

  @Prop() markerTitle: string = "nice";
  @Prop() icon: string = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  @Prop() iconWidth: number = 50;
  @Prop() iconHeight: number = 50;
  @Prop() lat: number;
  @Prop() lng: number;
  @Prop() address: string;


  @Method()
  async geocodeAddress(): Promise<any> {
    const geocoder = new google.maps.Geocoder()
    const result = await new Promise((resolve, reject) => {
      geocoder.geocode({ 'address': this.address }, (results, status) => {
        if (status === 'OK') {
          resolve(results[0]);
        } else {
          reject('cannot find that address');
        }
      });
    });

    return result;
  }

  @Method()
  async configuration(map): Promise<any> {
    let latlng;

    if (this.address && (!this.lat && !this.lng)) {
      latlng = (await this.geocodeAddress()).geometry.location;
    } else if (!this.address && (this.lat && this.lng)) {
      latlng = new google.maps.LatLng(this.lat, this.lng);
    }

    return {
      position: latlng,
      map: map,
      title: this.markerTitle,
      clickable: true,
      icon: {
        url: this.icon,
        scaledSize: new google.maps.Size(this.iconWidth, this.iconHeight),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      },
      type: 'info',
      animation: google.maps.Animation.DROP
    }
  }
}