import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  
  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }
  close(){
   this.modalController.dismiss()
  }
}
