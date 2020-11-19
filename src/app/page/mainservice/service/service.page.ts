import { ServicemenuPage } from './../servicemenu/servicemenu.page';

import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})

export class ServicePage implements OnInit {
  service = false
  constructor(
    private popoverController: PopoverController,
    private modalController: ModalController, private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  async menu() {
     const popover = await this.popoverController.create({
       component: ServicemenuPage,
      //  event: '',
       cssClass: 'popmenu',
       translucent: false
     });
   
     await popover.present();
   
  
  }
}
