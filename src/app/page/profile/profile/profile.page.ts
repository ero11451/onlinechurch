import { IonhelperService } from './../../../helper/ionhelper.service';

import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, PopoverController } from '@ionic/angular';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { interval } from 'rxjs';
import { MenuPage } from 'src/app/container/menu/menu.page';
import { SettingPage } from 'src/app/container/setting/setting.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(
    private actionSheetController: ActionSheetController,
    private ion: IonhelperService,
    private popoverController: PopoverController,
    private modalController: ModalController,
     private imagePicker: ImagePicker) { }

  public sections = ['Profile', 'Setting','wallet'];
  public activeSection = 'Profile'; 
  public options = {
  maximumImagesCount: 1,
  width: 100,
  height:100,
  quality:100,
  outputType: 100
};
  ngOnInit() {
  }
edit() {
}
async menu(ev: any) {
  const popover = await this.popoverController.create({
    component:MenuPage,
    event: ev,
    translucent: false
  });

  await popover.present();
}
uploadImg(){
  this.imagePicker.getPictures(this.options).then((results) => {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < results.length; i++) {
        let filename  = results[i].subscring(
        results[i].lestindexOf('/')+1)
        let path = results[i].subscring(results[i]).
        console.log('Image URI: ' + results[i]);
    }
  }, (err) => { });
}
doRefresh($event){}

 navSetting(){
  this.ion.presentModal(SettingPage, '', 'bottom-model-setting');
  }

  
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
      },
      {
        text: 'Delete',
        icon: 'trash',
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
}
