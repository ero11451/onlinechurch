import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss'],
})
export class HearderComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  async menu(ev: any) {
    const popover = await this.popoverController.create({
      component:MenuPage,
      event: ev,
      translucent: false
    });
  
    await popover.present();
  }

}
