import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../signup/signup';
import { ResetPasswordPage } from '../reset-password/reset-password';

import firebase from 'firebase';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any;
  zone: NgZone;

  constructor(platform: Platform) {
      this.zone = new NgZone({});
    firebase.initializeApp({
    apiKey: "AIzaSyAByNUakMAZVoKg-c_qvuqdY6GrS6YN2-s",
    authDomain: "firetest-de784.firebaseapp.com",
    databaseURL: "https://firetest-de784.firebaseio.com",
    storageBucket: "firetest-de784.appspot.com",
    messagingSenderId: "1065475258829"
    });

      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run( () => {
      if (!user) {
      this.rootPage = LoginPage;
      unsubscribe();
    } else { 
      this.rootPage = HomePage; 
      unsubscribe();
    }
  });     
});

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      /* Splashscreen.hide(); */
    });
  }
}
