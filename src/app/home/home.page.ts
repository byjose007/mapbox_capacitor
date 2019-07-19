import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Plugins } from '@capacitor/core';
import { environment } from 'src/environments/environment';

const { Geolocation } = Plugins;

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
  // async getCurrentPosition() {
  //   const coordinates = await Geolocation.getCurrentPosition();
  //   console.log('Current', coordinates);
  // }

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