import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/db/service/auth.service';
import { IonhelperService } from '../../../helper/ionhelper.service';
import { Router } from '@angular/router';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  // tslint:disable-next-line: variable-name
  validations_form: FormGroup;
  errorMessage = '';
  successMessage = '';
  userlocation;
  usercountry;

  // tslint:disable-next-line: variable-name
  validation_messages = {
    username: [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Enter a valid username.' }
    ],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    private nativeGeocoder: NativeGeocoder,
    public geoLocation: Geolocation,
    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private nav: Router,
    private ion: IonhelperService
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

async  tryRegister(value) {
    await this.getUserLocation();
    this.ion.ionLoading('please wait', 1000);
    this.authService.RegisterUser(value.email, value.password, value.username, this.usercountry, 'assets/images/userIcon.svg')
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.ion.ionToast('Your account has been created. Please log in.', 2000, 'primary');
        // this.successMessage = ;
        this.nav.navigate(['tabs/home'])
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.ion.ionToast(this.errorMessage, 2000, 'danger');
        this.successMessage = '';
      })
  }

  goLoginPage(page) {
    this.navCtrl.navigateBack(page);
  }

  getUserLocation(){
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.geoLocation.getCurrentPosition().then(resp => {
      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
        .then((result: NativeGeocoderResult[]) => {
          this.userlocation = result[0];
          this.usercountry = result[0].countryName;
        }, error => {
          this.ion.ionToast('there was an error geting your location', 1000, 'denger');
          console.log(error);
        });
    }, error => {
      console.log('Error getting location', error);
    })
  }
}
