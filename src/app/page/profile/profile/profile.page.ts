import { IonhelperService } from './../../../helper/ionhelper.service';

import { Component, OnInit } from '@angular/core';
import { ActionSheetController, MenuController, ModalController, PopoverController } from '@ionic/angular';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { interval } from 'rxjs';
import { MenuPage } from 'src/app/container/menu/menu.page';
import { SettingPage } from 'src/app/container/setting/setting.page';
import { FollowService } from '../../../db/service/follow.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../db/service/auth.service';
import { UserService } from '../../../db/service/user.service';
import { AllpostService } from '../../../db/service/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(
    private follow: FollowService,
    private userSer: UserService,
    private menuController: MenuController,
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private postSer: AllpostService
  ) {
    this.checkCurrentUser();
   }
  posts: any;
  postNumber:number;
  userImage: string;
  userDisplayName: string;
  status: string;
  bio: string;
  userEmail: string;
  isCurrentUser: boolean;
  userid: string;
  following?: any;
  followers?: any;
  Followers?: number;
  isFollowing: boolean;
  currentuid;
  isLoggedIn: boolean;
  ngOnInit() {
    this.userid = this.activatedRoute.snapshot.params.userid;
    console.log('user id ', this.userid);
    this.getUserData();
    this.getpost();
  }
  getFollowData() {
    this.follow.getFollowers(this.userid).subscribe(
      followers => {
        this.followers = followers;
        // this.userFollowers = followers;
      });
    this.follow.getFollowing(this.userid).subscribe(
      following => {
        this.following = following;
        // this.userFollowing = following;
      });
  }

  followUser() {
    if (this.isFollowing) {
      this.isFollowing = false;
      this.follow.unfollow(this.userid);
    } else {
      this.isFollowing = true;
      this.follow.follow(this.userid);
    }
  }
  menu(){
    this.menuController.open()
  }

getUserData(){
  this.userSer.retrieveUserDocumentFromID(this.userid).subscribe(user => {
     this.userDisplayName = user.displayName;
     this.bio = user.bio;
     this.status = user.status;
     this.userImage = user.userImage;
     this.followers = user.Followers;
     this.following = user.Followings;
  });
}
getpost(){
  const userid = this.activatedRoute.snapshot.params.userid;
  this.postSer.getAllCommentsForBlog(userid).subscribe(d => {
    console.log('user post', d);
    this.posts = d;
    this.postNumber = d.length;
  });
}
getDetele(postid){
  this.postSer.deletePost(postid)
}
  checkCurrentUser() {
    this.auth.getAuthState().subscribe(
      user => {
        if (user) {
          if (this.userid) {
            this.isLoggedIn = true;
            this.currentuid = user.uid;
            console.log('current user id', this.currentuid);
            if (this.userid === user.uid) {
              this.isCurrentUser = true;
            }
            this.follow.isFollowing(this.userid, this.currentuid).subscribe(
              followinguser => {
                if (followinguser[0]) {
                  this.isFollowing = true;
                }
            });
          }
        } else {
          this.isLoggedIn = false;

        }
    });
  }
}
