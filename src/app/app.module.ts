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

import * as firebase from 'firebase';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';


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
    NgPipesModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    YoutubeVideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
