import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicemenuPageRoutingModule } from './servicemenu-routing.module';

import { ServicemenuPage } from './servicemenu.page';
import { MywalletComponent } from 'src/app/container/mywallet/mywallet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicemenuPageRoutingModule
  ],
  declarations: [ServicemenuPage , MywalletComponent]
})
export class ServicemenuPageModule {}
