import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessgaelistPageRoutingModule } from './messgaelist-routing.module';

import { MessgaelistPage } from './messgaelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessgaelistPageRoutingModule
  ],
  declarations: [MessgaelistPage]
})
export class MessgaelistPageModule {}
