import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FollowService } from 'src/app/db/service/follow.service';
import { User } from '../models/user';
import { ChatsService } from '../services/chats/chats.service';
import { UserService } from '../services/user/user.service';
import { UtilService } from '../services/util/util.service';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {

  uids : any;
  uid : string;
  users: User[] = new Array<User>();
  chats : any;
  userFollowers: any;
  userFollowing: any;
  constructor(private chatsService: ChatsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userSer: UserService,
    private follow: FollowService,
    private utilService: UtilService,  private db : AngularFireDatabase) { 
    
    this.uid = this.activatedRoute.snapshot.params.uid;
    this.utilService.doLoading('Please Wait Loading Chats...');
    this.chatsService.getChats(this.uid).snapshotChanges().pipe(
      map(changes => changes.map(c => ({
        key : c.payload.key, ...c.payload.val()
      }))
      )).subscribe(uids => {
       uids.map(uid => {
          console.log('user data uid will show', uid);
          this.db.object(`/users/${uid.key}`).valueChanges().subscribe((user: User) => {
             user.key = uid.key;  this.users.push(user)});
          })
          console.log('1', this.users);
        })
        this.getFollowData()
      // key : chat.payload.key, ...chat.payload.val()
      // user : this.db.object(`/users/${chat.payload.key}`)
  }
  getFollowData() {
    this.follow.getFollowers(this.uid).subscribe(
      followers => {
        // this.followers = followers.length;
        this.userFollowers = followers;
        console.log(followers);
      });
    this.follow.getFollowing(this.uid).subscribe(
      following => {
        // this.following = following.length;
        console.log(following);
        this.userFollowing = following;
      });
  }

  openChat(key: string) {
    alert(key);
    this.chatsService.chatter =  {
      uid : this.uid,
      interlocutorUID : key
    }
     this.router.navigateByUrl('/chat-view')
  }

  ngOnInit() {
 
  }

  
}
