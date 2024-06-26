import { Injectable } from '@angular/core';
import {MapsAPILoader} from "@agm/core";
import {Observable} from "rxjs";


//Eventually here for upgrade of the website
@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  private geocoder: any;

  constructor(private mapLoader: MapsAPILoader) { }

  private initGeocoder() {
    console.log('Init geocoder!');
    this.geocoder = new google.maps.Geocoder();
  }


}
