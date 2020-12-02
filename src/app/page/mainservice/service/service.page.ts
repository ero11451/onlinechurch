import { ServicemenuPage } from './../servicemenu/servicemenu.page';

import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';

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
  santiziLinke:any ;
  link:string = 'b38HovDtblg';

  constructor(

    public sanitizer: DomSanitizer,
    private afs: AngularFirestore,
    ) {

    this.sanitizer = sanitizer;
    this.getLink();
    }

  ngOnInit() {
  }

  retrieveUserDocumentFromID() {
    return this.afs.doc<any>('users').valueChanges();
  }
  getLink(){
      this.santiziLinke = this.sanitizer.bypassSecurityTrustResourceUrl(`https://youtube.com/embed/${this.link}`);
  }
}
