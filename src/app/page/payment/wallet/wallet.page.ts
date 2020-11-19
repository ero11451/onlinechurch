import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FoundingPage } from '../founding/founding.page';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  userHistory = false

   async  foundWallet() {
     const modal = await this.modalController.create({
     component: FoundingPage,
     componentProps: { value: 123 }
     });
   
     await modal.present();
   
   }

}
