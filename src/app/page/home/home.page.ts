import { Router } from '@angular/router';
import { LocationPage } from './../location/location.page';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, PopoverController } from '@ionic/angular';
import { MenuPage } from 'src/app/container/menu/menu.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  list = [
    // {
    //   icon: "assets/icon/bible.svg",
    //   title: 'Bible',
    //   subtitle: 'Read and study the word of God at any time ',
    //   animation: 'animate__animated animate__bounceIn animate__faster',
    //   page:'bible'
    // },
    // {
    //   icon: "assets/icon/group.svg",
    //   title:'Community',
    //   subtitle:'Be apart of our church group be a part of the family',
    //   animation:'animate__animated animate__bounceIn animate__faster',
    //   page:'tabs/community'
    //    },
    // {
    //   icon: "assets/icon/map.svg",
    //   title: 'Fine Church',
    //   subtitle: 'Meet and get igroup',
    //   animation:'animate__animated animate__bounceIn animate__faster',
    //   page:'location'
    // },
    // {
    //   icon:"assets/icon/devotion.svg",
    //   title:'Devotional',
    //   subtitle:'Meet and get in ',
    //   animation:'animate__animated animate__bounceIn animate__faster',
    //   page:'devotion'
    // },
    // {
    //   icon: "assets/icon/giving.svg",
    //   title: 'Giving',
    //   subtitle: 'Meet and get in oup',
    //   animation: 'animate__animated animate__bounceIn animate__fast',
    //  page:'giving'
    // },
    // {
    //   icon: "assets/icon/money.svg",
    //   title: 'Fund Wallet',
    //   subtitle: 'Meet and get in oup',
    //   animation: 'animate__animated animate__bounceIn animate__fast',
    //  page:'founding'
    // },
  ]
  constructor(
    private route: Router,
    private popoverController: PopoverController,
    private actionSheetController: ActionSheetController,
  
    ) { }

 async togoPage(page){
    this.route.navigate([page]);
  }

  ngOnInit() {}

async  saveMessage(){
  const actionSheet = await this.actionSheetController.create({
    header: 'Message',
    buttons: [{
      text: 'Play message',
      role: 'play',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Share',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      }
    }, {
      text: 'Save message',
      icon: 'save',
      handler: () => {
        console.log('Cancel clicked');
      }
    },
    {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });

  await actionSheet.present();
 }
 doRefresh(event) {
   console.log('Begin async operation');
   
   setTimeout(() => {
     console.log('Async operation has ended');
     event.target.complete();
   }, 2000);
 }
}
