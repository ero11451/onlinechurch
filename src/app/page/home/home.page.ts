import { Router } from '@angular/router';
import { LocationPage } from './../location/location.page';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController, Platform, PopoverController } from '@ionic/angular';
import { MenuPage } from 'src/app/container/menu/menu.page';
import { Observable } from 'rxjs';
import { IonhelperService } from 'src/app/helper/ionhelper.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeService } from 'src/app/allapi/youtube.service';
import { ConnectionStatus, NetworkService } from '../../helper/network.service';
import { AllpostService } from 'src/app/db/service/post.service';

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
  playlistId = 'PLNG2aD8yvXdi7znHBfzPy3Y4gmp0Ga1ET';
  testimonies;
  testimoniesNumber;

  constructor(
    private youtube: YoutubeVideoPlayer,
    private ion: IonhelperService,
    private list: YoutubeService,
    public sanitizer: DomSanitizer,
    private plt: Platform,
    public navCtrl: NavController,
    private networkSer: NetworkService,
    private blogService: AllpostService
    ) { }

 
  ngOnInit() {
    this.networkSer.onNetworkChange();
    // .subscribe(d => console.log('network status', d))
    this.getShow();
    this.getTestimony();

    this.networkSer.onNetworkChange().subscribe((status: ConnectionStatus) => {
      if (status == ConnectionStatus.Online) {
        console.log('you are online')
      }
    });
   }

 getShow(){
     this.playlists = this.list.getPlaylistsForChannel(this.channelId);
     this.playlists.subscribe(data => {
       this.playlist = data.items;
       this.notNetwork = false;
       console.log('playlists: ', data.items );
       }, err => {
       console.log(err);
       this.ion.ionToast('there was an error plase try again', 1000, 'primary')
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

getTestimony(){
  this.blogService.getApprovedPost().subscribe(post => {
    this.testimonies = post
    this.testimoniesNumber = post.length
  }
  );
}

 doRefresh(event) {
   console.log('Begin async operation');
   this.getShow();
   this.getTestimony();
   setTimeout(() => {
     console.log('Async operation has ended');
     event.target.complete();
   }, 2000);
 }




 loadData(event) {

  setTimeout(() => {
    console.log('Done');
    event.target.complete();
    // App logic to determine if all data is loaded
    // and disable the infinite scroll

  }, 300);
}
}
