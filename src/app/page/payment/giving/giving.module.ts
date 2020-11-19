import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GivingPageRoutingModule } from './giving-routing.module';

import { GivingPage } from './giving.page';
import { MywalletComponent } from 'src/app/container/mywallet/mywallet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GivingPageRoutingModule
  ],
  declarations: [GivingPage , MywalletComponent]
})
export class GivingPageModule {}
