import { MenuPageModule } from './container/menu/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';

import {NgPipesModule} from 'ngx-pipes';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


import * as firebase from 'firebase';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Network } from '@ionic-native/network/ngx';
import { ServicesModule } from './page/mainchat/services/services.module';

firebase.default.initializeApp(environment.firebaseConfig);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [

    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MenuPageModule,
    NgPipesModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ServicesModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    YoutubeVideoPlayer,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    NativeGeocoder,
    Network,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
