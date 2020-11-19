import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowPageRoutingModule } from './follow-routing.module';

import { FollowPage } from './follow.page';
import { HearderComponent } from 'src/app/container/hearder/hearder.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowPageRoutingModule
  ],
  declarations: [FollowPage, HearderComponent]
})
export class FollowPageModule {}
