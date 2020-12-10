// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { User } from '../../models/user';
// // import { User } from 'src/app/models/user';

// @Injectable({
//   providedIn: 'root'
// })
 
// export class AuthService {

//   constructor(private afAuth: AngularFireAuth) {

//    }

//   public getAuth () : firebase.default.auth.Auth {
//        let auth
//        this.afAuth.authState.subscribe(user => auth = user); 
//        return auth
//    }

//   // // get the current User Id
//    public getCurrentUserUid() : string {
//      let uid
//      this.afAuth.currentUser.then(user => uid = user.uid);
//     return uid
//   } 
   
//   // // log in 
//   public sigin(user: User) : Promise<firebase.default.auth.UserCredential>  {
//      return this.afAuth.signInWithEmailAndPassword(user.email, user.password);
//    }

//   // // register
//   public createAccount(user: User) : Promise<firebase.default.auth.UserCredential> {
//     return this.afAuth.createUserWithEmailAndPassword(user.email, user.password); 
//    }

//   // // logout 
//   public logout(): Promise<void> {
//     return this.afAuth.signOut();
//   }
  
//   }