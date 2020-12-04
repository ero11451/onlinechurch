import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/db/service/auth.service';
import { UserService } from 'src/app/db/service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {


  isUser: boolean;

  photoURL = '../../assets/images/default-profile.jpg';
  userName = '';
  displayName = '';
  status = '';
  Phonenumber = '';
  displayPicture = '';
  bannerPicture = '';
  image: string = null;
  Bio: string;


  Age: string ;
  Gender: string;

  Location = '';
  uid;

  currentusername;

  inputFile;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  isTaken = false;



  constructor(
    public  auth: AuthService,
    public  router: Router,
    private storage: AngularFireStorage,
    public  ngZone: NgZone,

    public  toastCtrl: ToastController,
    public  loadingCtrl: LoadingController,

    private userService: UserService,
    private route: ActivatedRoute,
    private afs: AngularFirestore

  ) { }

  // ngOnInit() {
  // }
  accountForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // UsernameValidators.cannotContainSpace,
      Validators.maxLength(15)
    ]),
    displayname: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
    ]),
    inputstatus: new FormControl('', [
      Validators.minLength(5),
      Validators.required,
      Validators.maxLength(100)
    ]),
    biography: new FormControl('', [
      Validators.minLength(5),
      Validators.required,
      Validators.maxLength(100)
    ]),
    phone: new FormControl('', [
      Validators.minLength(5),
      Validators.required,
      Validators.maxLength(100)
    ]),

    location: new FormControl('', [
      Validators.minLength(5),
      Validators.required,
      Validators.maxLength(100)
    ]),
    age: new FormControl('', [
      Validators.minLength(1),
      Validators.required,
      Validators.maxLength(100)
    ]),
    gender: new FormControl('', [
      Validators.minLength(1),
      Validators.required,
      Validators.maxLength(100)
    ]),

    dp: new FormControl('',),
  });

  get username() {
    return this.accountForm.get('username');
  }
  get displayname() {
    return this.accountForm.get('displayname');
  }
  get biography() {
    return this.accountForm.get('biography');
  }

  get phone() {
    return this.accountForm.get('phone');
  }

  get gender() {
    return this.accountForm.get('gender');
  }

  get dp() {
    return this.accountForm.get('dp');
  }

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      currentuser => {
        if (currentuser) {
          this.userService.retrieveUserDocument(currentuser.uid).subscribe(
            user => {
              if (user) {
                this.displayName = user.displayName;
                this.currentusername = user.userName;
                this.userName = user.userName;
                this.photoURL = user.photoURL;
                this.status = user.status;
                this.displayPicture = user.displayPicture;
                this.bannerPicture = user.bannerPicture;
                this.Phonenumber = user.Phonenumber;
                this.Location = user.Location;
                this.Bio = user.Bio;
                this.uid = user.uid;
              }
            });
        } else {
          this.router.navigateByUrl('auth');
        }
      });
  }

  search($event) {
    const q = $event.target.value;
    this.checkUsername(q);
  }

  checkUsername(q) {
    this.afs.collection('users', ref => ref.where('userName', '==', q)).valueChanges().subscribe(user => {
      const searchuser: any = user[0];
      if (user[0] && this.currentusername !== searchuser.userName) {
          this.isTaken = true;
      } else {
        this.isTaken = false;
      }
    });
  }

  // update() {
  //   if (!this.isTaken && !this.username.errors && !this.displayname.errors && !this.inputstatus.errors) {
  //     this.auth.updateUser(
  //         this.displayName,
  //         this.userName,
  //         this.status,
  //         this.Bio,
  //         this.Phonenumber,
  //         this.Location,
  //         this.Age,
  //         this.Gender,
  //         ).then(
  //       () => console.log('User details updated'));
  //         this.router.navigateByUrl('user/' + this.userName);
  //   }
  // }


  async presentLoading(loading) {
    return await loading.present();
  }


}
