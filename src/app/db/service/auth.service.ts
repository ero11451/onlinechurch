import { Injectable } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { IonhelperService } from '../../helper/ionhelper.service';
import { UserService } from './user.service';


interface User {
  uid: string;
  email: string;
  displayName?: string;
  walletBallance?: number;
  status: string;
  userImage: string;
  onlineStatus: boolean;
  bio: string;
  Followings?: number;
  Followers?: number;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData;
  public currentUser: firebase.default.User = null;

  public user: Observable<User[]>;
  public userCollection: AngularFirestoreCollection<User>;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private ion: IonhelperService,
    private afs: AngularFirestore,
    private userSer:  UserService,
    public afAuth: AngularFireAuth,
    ) {
      this.ngFireAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user;
          this.currentUser = user;
          // return this.afStore.collection('users',).add(user);
        } else {
          this.currentUser = null;
          console.log('you no get any data with us for now when you register we do talk') }
         });
    }
  // Login in with email/password
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

    // Register user with email/password
  RegisterUser(useremail, password, username , userContry, image) {
      this.ion.ionLoading(`please wait`, 200);
      return this.ngFireAuth.createUserWithEmailAndPassword(useremail, password)
      .then(user => {
        console.log(user.user.uid);
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.user.uid}`);
        const data = {
          uid: user.user.uid,
          email: useremail,
          displayName: username,
          userImage: image,
          walletBallance: 0,
          totalViews: 0,
          status: 'member',
          onlineStatus: true,
          location: userContry || '',
          bio: '',
          Followings: 0,
          Followers: 0,
        };
        return userRef.set(data, { merge: true})
        .then(FormData =>
          this.ion.ionLoading(`user created successfuly your user name ${FormData}`, 2000)
         )
         .catch(erro =>  {
              console.log(erro);
              this.ion.ionToast('there was an error with your request', 1000, 'danger')
           } );
       })
     }

  getUserdata(userid){
       this.ngFireAuth.currentUser.then(user => this.userCollection.get());
       return this.userCollection.doc<User>(userid).valueChanges().pipe(
        take(1),
        map(user => {  user = userid; return user; })
      );
     }

   checkLoginState(){ 
    //  this.location.
   }

    getAuthState() {
      return this.afAuth.authState;
    }
    getCurrentUseData(){
      // return this.afAuth.authState.subscribe(data => {
       return this.userSer.retrieveUserDocumentFromID(this.userData.uid);
      // });/
    }
    // Sign-out
    SignOut() {
         this.ngFireAuth.signOut().then(() => {
        this.router.navigate(['/ilogin']);
      });
    }
}