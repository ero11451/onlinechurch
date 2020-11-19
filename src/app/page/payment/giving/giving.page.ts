import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-giving',
  templateUrl: './giving.page.html',
  styleUrls: ['./giving.page.scss'],
})
export class GivingPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modalController.dismiss()
  }
}
