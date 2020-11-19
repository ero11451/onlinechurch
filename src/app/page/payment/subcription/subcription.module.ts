import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubcriptionPageRoutingModule } from './subcription-routing.module';

import { SubcriptionPage } from './subcription.page';
import { MywalletComponent } from 'src/app/container/mywallet/mywallet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubcriptionPageRoutingModule
  ],
  declarations: [SubcriptionPage , MywalletComponent]
})
export class SubcriptionPageModule {}
