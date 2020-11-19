
import { FeedbackPage } from '../feedback/feedback.page';
import { LogoutPage } from './../logout/logout.page';

import { IonhelperService } from './../../helper/ionhelper.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AboutPage } from '../about/about.page';
import { SettingPage } from '../setting/setting.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private ion: IonhelperService,
    private popoverController: PopoverController) { }

  ngOnInit() {
  }
  async navAbout(){
    await this.popoverController.dismiss()
    this.ion.presentModal(AboutPage, '', 'bottom-model');

  }
  async feedBack(){
    await this.popoverController.dismiss()
    this.ion.presentModal(FeedbackPage, '', 'bottom-model');

  }
  async  navSetting(){
    await this.popoverController.dismiss()
    this.ion.presentModal(SettingPage, '', 'bottom-model-setting');

  }
 async logout(){
   await this.popoverController.dismiss()
   this.ion.presentModal(LogoutPage, '', 'bottom-model');
  }
}
