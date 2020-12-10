import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsService } from './chats/chats.service';
import { UserService } from './user/user.service';
import { UtilService } from './util/util.service';
// import { AuthService } from './auth/auth.service';
import { CameraService } from './camera/camera.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ChatsService,  UserService, UtilService, CameraService]
})
export class ServicesModule { }
