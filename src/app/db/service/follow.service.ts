import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    public userservice: UserService,
  ) { }

  isFollowing(profileuid, currentuid) {
    return this.afs.collection<any>('/users/' + profileuid + '/followers', ref => ref.where('uid', '==', currentuid)).valueChanges();
  }

  follow(profileuid) {
    this.auth.getAuthState().subscribe(
      user => {
        if (user) {
          const currentuid = user.uid;
          let data = {
            uid: profileuid
          };
          this.afs.collection<any>('/users/' + currentuid + '/following').doc(profileuid).set(data);
          data = {
            uid: currentuid
          };
          this.afs.collection<any>('/users/' + profileuid + '/followers').doc(currentuid).set(data).then(
            () => {
              console.log('some one just followed you hope you happy about that')
            });
        }
      });
  }



  unfollow(profileuid) {
    this.auth.getAuthState().subscribe(
      user => {
        if (user) {
          const currentuid = user.uid;
          this.afs.collection<any>('/users/' + currentuid + '/following').doc(profileuid).delete();
          this.afs.collection<any>('/users/' + profileuid + '/followers').doc(currentuid).delete().then(
            () => {
              console.log('some one just unfollowed you please cheak your self');
              // this.auth.lostFollowPoint();
            });
        }
    });
  }

  getFollowing(uid) {
    return this.afs.collection<any>('/users/' + uid + '/following').valueChanges();
  }



  getFollowers(uid) {
    return this.afs.collection<any>('/users/' + uid + '/followers').valueChanges();
  }


}