import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu() {
    this.navigate =
    [

      {
        title : 'Subscription',
        url   : '/subscription', 
        icon  : 'assets/images/wallet..jpg'  
      },
      {
      icon: "assets/icon/bible.svg",
      title: 'Bible',
      subtitle: 'Read and study the word of God at any time ',
      animation: 'animate__animated animate__bounceIn animate__faster',
      url:'bible'
    }, 
    {
      icon: "assets/icon/gift-card.svg",
      title: 'Gift card',
      subtitle: 'Read and study the word of God at any time ',
      animation: 'animate__animated animate__bounceIn animate__faster',
      url: 'celebrationcard'
    },
    {
      icon: "assets/icon/settings.svg",
      title: 'setting',
      subtitle: 'Read and study the word of God at any time ',
      animation: 'animate__animated animate__bounceIn animate__faster',
      url:'setting'
    },
    {
      icon: "assets/icon/market.svg",
      title: 'Market',
      subtitle: 'Read and study the word of God at any time ',
      animation: 'animate__animated animate__bounceIn animate__faster',
      url:'market'
    },
    {
      icon: "assets/icon/map.svg",
      title: 'Fine Church',
      subtitle: 'Meet and get igroup',
      animation:'animate__animated animate__bounceIn animate__faster',
      url:'location'
    },
    {
      icon:"assets/icon/devotion.svg",
      title:'Devotional',
      subtitle:'Meet and get in ',
      animation:'animate__animated animate__bounceIn animate__faster',
      url:'devotion'
    },
    {
      icon: "assets/icon/giving.svg",
      title: 'Giving',
      subtitle: 'Meet and get in oup',
      animation: 'animate__animated animate__bounceIn animate__fast',
      url:'giving'
    },
    {
      icon: "assets/icon/logout.svg",
      title: 'Logout',
      subtitle: 'Meet and get in oup',
      animation: 'animate__animated animate__bounceIn animate__fast',
      url:'logout'
    },
    ];
  }
}
