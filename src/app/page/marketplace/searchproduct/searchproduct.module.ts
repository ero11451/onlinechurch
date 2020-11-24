import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchproductPageRoutingModule } from './searchproduct-routing.module';

import { SearchproductPage } from './searchproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchproductPageRoutingModule
  ],
  declarations: [SearchproductPage]
})
export class SearchproductPageModule {}
