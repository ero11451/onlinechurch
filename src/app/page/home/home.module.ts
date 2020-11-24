import { MywalletComponent } from './../../container/mywallet/mywallet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CelebrationcardComponent } from '../../container/celebrationcard/celebrationcard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, MywalletComponent, CelebrationcardComponent]
})
export class HomePageModule {}
