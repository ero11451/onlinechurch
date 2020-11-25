import { Router } from '@angular/router';
import { LocationPage } from './../location/location.page';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, Platform, PopoverController } from '@ionic/angular';
import { MenuPage } from 'src/app/container/menu/menu.page';
import { Observable } from 'rxjs';
import { IonhelperService } from 'src/app/helper/ionhelper.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeService } from 'src/app/allapi/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  notNetwork: boolean;
  channelId = 'UC1M_QPZPhVNtBS8tMO885eQ';
  playlists: Observable<any>;
  playlist: Observable<any>;
  videos: Observable<any[]>;
 playlistId = 'PLNG2aD8yvXdi7znHBfzPy3Y4gmp0Ga1ET'
 
  constructor(
    private route: Router,
    private popoverController: PopoverController,
    private actionSheetController: ActionSheetController,
    private youtube: YoutubeVideoPlayer,
    private ion: IonhelperService,
    private list: YoutubeService,
    public sanitizer: DomSanitizer,
    private plt: Platform,
  
    ) { }

 async togoPage(page){
    this.route.navigate([page]);
  }
  ngOnInit() {
    this.getShow();
   }

 getShow(){
     this.playlists = this.list.getPlaylistsForChannel(this.channelId);
     this.playlists.subscribe(data => {
       this.playlist = data.items;
       this.notNetwork = false;
       console.log('playlists: ', data.items );
       }, err => {
       console.log(err);
       this.notNetwork = true;
     });
  }


  openVideo(video) {
   console.log(video.id.videoId);
   if (this.plt.is('cordova')) {
     this.youtube.openVideo(video.id.videoId);
   } else {
     window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`);
   }
  }



 doRefresh(event) {
   console.log('Begin async operation');
   
   setTimeout(() => {
     console.log('Async operation has ended');
     event.target.complete();
   }, 2000);
 }
}
