
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CelebrationcardComponent } from '../../container/celebrationcard/celebrationcard.component';
import { NgPipesModule } from 'ngx-pipes';
import { HearderComponent } from 'src/app/container/hearder/hearder.component';


@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgPipesModule,
    // HearderComponent
  ],
  declarations: [HomePage,  CelebrationcardComponent]
})
export class HomePageModule {}
