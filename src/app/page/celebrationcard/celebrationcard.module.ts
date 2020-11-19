import { WalletPage } from './../payment/wallet/wallet.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CelebrationcardPageRoutingModule } from './celebrationcard-routing.module';

import { CelebrationcardPage } from './celebrationcard.page';
import { MywalletComponent } from 'src/app/container/mywallet/mywallet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelebrationcardPageRoutingModule
  ],
  declarations: [CelebrationcardPage, MywalletComponent]
})
export class CelebrationcardPageModule {}
