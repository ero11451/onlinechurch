import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConnectionStatus, NetworkService } from './helper/network.service';
import { IonhelperService } from './helper/ionhelper.service';
import { LoginPage } from './page/reg/login/login.page';
import { LogoutPage } from './container/logout/logout.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './db/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  userImage;
  userName;
  userId;
  nodata: boolean = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private networkService: NetworkService,
    private ion: IonhelperService,
    private auth: AngularFireAuth,
    private user: UserService,

    private menuController: MenuController
  ) {
    this.initializeApp();
    this.getUser();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#0bce86');
      this.statusBar.styleDefault();
      this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
        if (status == ConnectionStatus.Offline) {
          console.log('you are offline')
          this.ion.ionLoading('You are offline Please on your network', 3000);
        }
    });
    });
    this.splashScreen.hide();
  }

  sideMenu() {
    this.navigate =
    [
      {
        title : 'Wallet',
        url   : '/wallet',
        icon  : 'assets/images/wallet.svg'
      },
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
    // {
    //   icon: "assets/icon/market.svg",
    //   title: 'Market',
    //   subtitle: 'Read and study the word of God at any time ',
    //   animation: 'animate__animated animate__bounceIn animate__faster',
    //   url:'market'
    // },
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
    // {
    //   icon: "assets/icon/logout.svg",
    //   title: 'Logout',
    //   subtitle: 'Meet and get in oup',
    //   animation: 'animate__animated animate__bounceIn animate__fast',
    //   url:'logout'
    // },
    ];
  }

  getUser(){
    this.auth.authState.subscribe(user => {
      this.nodata = true;

      this.user.retrieveUserDocumentFromID(user.uid).subscribe(
        d => {
        console.log(d);
        this.userImage = d.displayImage;
        this.userName = d.displayName;
        this.userId = d.uid;
      }
      )
    });
  }

 async logOut(){
    await this.menuController.close()
    this.ion.presentModal(LogoutPage, '', 'bottom-model')
  }
}
