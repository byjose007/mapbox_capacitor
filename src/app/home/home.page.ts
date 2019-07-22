import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Plugins } from '@capacitor/core';
import { environment } from 'src/environments/environment';

const { Geolocation } = Plugins; 


import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 37.75;
  lng = -122.41;
  message = 'Hello World!';

   // Firebase Data
   locations: Observable<any>;
   locationsCollection: AngularFirestoreCollection<any>;
  
  
   // Misc
   isTracking = false;
   watch: string;
   user = null;

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;

    
  }


  ngOnInit(){
    this.initializeMap();
  }

  ionViewDidEnter(){
    //this.initializeMap();
  }





initializeMap(){
  this.getCurrentPosition();
  

}


   async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
    this.lat = coordinates.coords.latitude;
    this.lng=  coordinates.coords.longitude;
    this.buildMap();
  }

buildMap() {
  this.map = new mapboxgl.Map({
    container: 'map',
    style: this.style,
    zoom: 13,
    center: [this.lng, this.lat]
  });

  console.log(this.map);
  
}
 

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
    })
  }
}