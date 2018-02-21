import { Component } from '@angular/core';

@Component({
  selector: '[maps-google]',
  template: require('./maps-google.template.html'),
  styles: ['agm-map { height: 100% }']
})
export class MapsGoogle {
  lat: number = -12.049038;
  lng: number = -77.030975;
  zoom: number = 15;
}
