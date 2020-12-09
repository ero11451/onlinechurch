import { Component, OnInit, ViewChild } from '@angular/core';

import { IonSlides } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from '../../../db/service/user.service';
import { AllpostService } from '../../../db/service/post.service';
import { Post } from 'src/app/db/model/blog';
import { LikesService } from '../../../db/service/like.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/db/service/auth.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
  
  postID: string;
  onlineUsers;
  allPost;
  userid;
  currentUserName;
  currentUserImage;
  private unsubscribe$ = new Subject<void>();
  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  constructor(
    private users: UserService,
    private postSrv: AllpostService,
    private auth : AngularFireAuth,
    private postService: LikesService,
    private userSer: UserService
  ) {}

  ngOnInit(){
    this.getUserOnline();
    this.getuserAuth();
    this.getAllPost();
    this.getUser()
  }
  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
  }

  getUser(){
    this.auth.authState.subscribe(user => {
      // this.nodata = true;

      this.userSer.retrieveUserDocumentFromID(user.uid).subscribe(
        d => {
        if (d) {
          console.log(d);
          this.currentUserImage  = d.userImage || '';
          this.currentUserName = d.displayName;
          // this.userId = d.uid;
        }else{
          console.log('there was an error')
          // this.nodata = true;
        }
      }
      )
    });
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  onSearchChange($event){}

  getUserOnline() {
    this.users.getOnlineUsers().
    pipe(takeUntil(this.unsubscribe$))
    .subscribe(result => {
    this.onlineUsers = result;
    });
  }
  getAllPost() {
    this.postSrv.getAllPosts().
    pipe(takeUntil(this.unsubscribe$))
    .subscribe(result => {
    this.allPost = result;
    console.log(result);
    });
  }
  getuserAuth(){
    this.auth.authState.subscribe(user =>  {
      this.userid = user.uid
      console.log(this.userid)
    } );
  }
  likePost(post: any) {
    console.log();
    this.postService.addLike(post.commentId, {likes: post.likes + 1});
  }
   // tslint:disable-next-line: use-lifecycle-interface
   ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    }
  
}
