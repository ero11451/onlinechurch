import { ServicemenuPage } from './../servicemenu/servicemenu.page';

import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

interface Live {
  link: any;
  title:any;
}


@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})

export class ServicePage implements OnInit {
  service = false
 
  constructor(

    public sanitizer: DomSanitizer,
    private popoverController: PopoverController,
    private modalController: ModalController, private actionSheetController: ActionSheetController) { 

    this.sanitizer = sanitizer;
    }

  ngOnInit() {
    this
  }
 

  getLink(link){
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://youtube.com/embed/${link}`);
  }
}
