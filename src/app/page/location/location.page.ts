
import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';

import {
  Platform
} from '@ionic/angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { Subscription } from 'rxjs';
import firebase from 'firebase';

declare var google: any;
let map: any;
let marker: any;
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
let infowindow: any;
const iconBase = 'http://maps.google.com/mapfiles/ms/icons/';
const maicon = {
  url:
    'https://i.imgur.com/hIoBt31.png',

};

export const snapshotToArray = (snapshot: any) => {
  const returnArr = [];

  snapshot.forEach((childSnapshot: any) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};
declare var google;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})


export class LocationPage implements OnInit {

  private updateSubscription: Subscription;

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  zones = [];

  constructor() {
    firebase.database().ref('zones/').on('value', resp => {
      this.zones = [];
      this.zones = snapshotToArray(resp);
      for (const donor of this.zones) {
        this.createMarkers(donor);
      }
    });
    this.initMap();
  }

  ngOnInit() {

    firebase.database().ref('zones/').on('value', resp => {
      this.zones = [];
      this.zones = snapshotToArray(resp);
      for (const donor of this.zones) {
        this.createMarkers(donor);
      }
    });
  }

  ngAfterViewInit() {
     this.initMap();
     firebase.database().ref('zones/').on('value', resp => {
          this.zones = [];
          this.zones = snapshotToArray(resp);
          for (const donor of this.zones) {
            this.createMarkers(donor);
          }
        });
  }

  initMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: { lat: 6.332512242525205, lng: 5.622940689248757 },
        zoom: 14
      });

      infowindow = new google.maps.InfoWindow();


      marker = new google.maps.Marker({
        position: { lat: 6.332512242525205, lng: 5.622940689248757 },
        map,
        title: 'Click to zoom',
        icon:     "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        draggable: true
      });

      map.addListener('center_changed', () => {
        window.setTimeout(() => {
          map.panTo(marker.getPosition());
        }, 300000000);
      });

      marker.addListener('click', (event: any) => {
        console.log(marker.getPosition().lat());
        console.log(marker.getPosition().lng());
        infowindow.setPosition(event.latLng);
        infowindow.setContent('<div class ="p-2 pr-2">' + '<p>Church Location hq</p>' + '<p>phone:0907574875</p>' +
        '<p>passtor:jack daniel</>p' +
        '<h3><a href="/tabs/home' + marker.getPosition().lat() + '/' + marker.getPosition().lng()  + '">home</a></h3>' + '</div>');
        infowindow.open(map, marker);
      });
    }, (error) => {
      console.log(error);
    }, options);
  }

  createMarkers(place: any) {
    const latitude = parseFloat(place.coords.latitude);
    const longitude = parseFloat(place.coords.longitude);
    const zoneMarker = new google.maps.Marker({
      map,
      position: { lat: latitude, lng: longitude },
      // labelOrigin: new google.maps.Point(55, 12),
      label: {
        text: place.zonename,
        color: 'orange',
        fontSize: '12px',
        // x: '200',
        // y: '100'
      },
      icon: 'https://i.imgur.com/hIoBt31.png'


    });

    google.maps.event.addListener(zoneMarker, 'click', function() {
      // tslint:disable-next-line:max-line-length
      infowindow.setContent('<h3>' + place.zonename + '</h3><p>Zonal Cordinator: ' + place.cordinator + '<br>Cell location: ' + place.celllocation + '</p>');
      infowindow.open(map, this);
    });
  }

}

// import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
// import { NavController, Platform } from '@ionic/angular';
// import { Router } from '@angular/router';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

// declare var google;
// declare const NavigationBar: any;
// type Sections = 'Pharmacies' | 'Grocery Stores';
// @Component({
//   selector: 'app-map-home',
//   templateUrl: './location.page.html',
//   styleUrls: ['./location.page.scss'],
// })
// export class LocationPage implements OnInit {
//   sections: Sections[] = ['Pharmacies', 'Grocery Stores'];
//   activeSection: Sections = 'Pharmacies';
//   options: GeolocationOptions;
//   currentPos: Geoposition;
//   places: Array<any>;
//   @ViewChild('map', { static: false }) mapElement: ElementRef;
//   map: any;
//   pharmacies: { name: string, image: string, postiion: string }[] = [];
//   groceries: { name: string, image: string, postiion: string }[] = [];
//   constructor(public navCtrl: NavController, private geolocation: Geolocation, private router: Router,
//            private statusBar: StatusBar, private platform: Platform) {
//     if (this.platform.is('cordova')) {
//       this.statusBar.styleDefault();
//       this.statusBar.backgroundColorByHexString('#F7F7F7');
//       NavigationBar.backgroundColorByHexString('#F7F7F7');
  
//     }
//     this.getUserPosition();
//     for (let index = 0; index < 4; index++) {
//       this.pharmacies.push({ name: 'Store Name', image: 'assets/images/product.png', postiion: '#500' });
//     }
//     for (let index = 0; index < 4; index++) {
//       this.groceries.push({ name: 'Store Name', image: 'assets/images/product.png', postiion: '#500' });
//     }
//   }
//   ionViewWillEnter() {
//     this.statusBar.styleDefault();
//     this.statusBar.backgroundColorByHexString('#F7F7F7');
//     NavigationBar.backgroundColorByHexString('#F7F7F7');
//   }
//   ngOnInit() {
//   }
//   ionViewDidEnter() {
//   }
//   addMap(lat, long) {
//     const latLng = new google.maps.LatLng(lat, long);
//     const mapOptions = {
//       center: latLng,
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP,
//       mapTypeControl: false,
//       disableDefaultUI: true,
//       zoomControl: false,
//       rotateControl: false
//     };

//     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//     this.getRestaurants(latLng).then((results: Array<any>) => {
//       this.places = results;
//       for (let i = 0; i < results.length; i++) {
//         this.createMarker(results[i]);
//       }
//     }, (status) => console.log(status));

//     this.addMarker();

//   }
//   addMarker() {
//     const marker = new google.maps.Marker({
//       map: this.map,
//       animation: google.maps.Animation.DROP,
//       position: this.map.getCenter()
//     });

//     const content = '<p>This is your current position !</p>';
//     const infoWindow = new google.maps.InfoWindow({
//       content
//     });

//     google.maps.event.addListener(marker, 'click', () => {
//       infoWindow.open(this.map, marker);
//     });

//   }
//   getRestaurants(latLng) {
//     const service = new google.maps.places.PlacesService(this.map);
//     const request = {
//       location: latLng,
//       radius: 8047,
//       types: ['pharmacy']
//     };
//     return new Promise((resolve, reject) => {
//       service.nearbySearch(request, function(results, status) {
//         if (status === google.maps.places.PlacesServiceStatus.OK) {
//           resolve(results);
//         } else {
//           reject(status);
//         }

//       });
//     });

//   }
//   createMarker(place) {
//     const marker = new google.maps.Marker({
//       map: this.map,
//       animation: google.maps.Animation.DROP,
//       position: place.geometry.location
//     });
//     console.log('marker', marker);
//   }
//   getUserPosition() {
//     this.options = {
//       enableHighAccuracy: false
//     };
//     this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {

//       this.currentPos = pos;

//       console.log(pos);
//       this.addMap(pos.coords.latitude, pos.coords.longitude);

//     }, (err: PositionError) => {
//       console.log('error : ' + err.message);

//     });
//   }
// }
