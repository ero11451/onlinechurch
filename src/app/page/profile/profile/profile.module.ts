import { MywalletComponent } from 'src/app/container/mywallet/mywallet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

// tslint:disable-next-line: ordered-imports
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
  ],
  declarations: [
    ProfilePage,
    UserDetailComponent,
    MywalletComponent
    ]
})
export class ProfilePageModule {}
