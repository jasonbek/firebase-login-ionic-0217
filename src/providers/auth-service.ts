import { Injectable } from '@angular/core';
import firebase from 'firebase';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class AuthService {
  // Here we declare the variables we'll be using.
  public fireAuth: any;
  public userProfile: any;
  
  constructor() {
  this.fireAuth = firebase.auth();
  this.userProfile = firebase.database().ref('/userProfile');

  }

loginUser(email: string, password: string): any {
  return this.fireAuth.signInWithEmailAndPassword(email, password);
}

signupUser(email: string, password: string): any {
  return this.fireAuth.createUserWithEmailAndPassword(email, password)
    .then((newUser) => {
      this.userProfile.child(newUser.uid).set({email: email
});
});
}
  
/**
   * [resetPassword description]
   * This function will take the user's email address and send a password reset link, then Firebase will handle the
   * email reset part, you won't have to do anything else.
   *
   * @param  {string} email    [User's email address]
   */
  resetPassword(email: string): any {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  /**
   * This function doesn't take any params, it just logs the current user out of the app.
   */
  logoutUser(): any {
    return this.fireAuth.signOut();
  }

}