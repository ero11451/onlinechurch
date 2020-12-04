import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupPageRoutingModule } from './group-routing.module';

import { GroupPage } from './group.page';
import { SearchPage } from '../search/search.page';
import {NgPipesModule} from 'ngx-pipes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupPageRoutingModule,
    NgPipesModule
  ],
  declarations: [GroupPage , SearchPage]
})
export class GroupPageModule {}
