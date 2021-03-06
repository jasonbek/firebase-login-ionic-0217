import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { LoginPage } from '../pages/login/login';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  public signupForm;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;

  /*constructor(public navCtrl: NavController, public navParams: NavParams) {}
*/
constructor(public navCtrl: NavController, public navParams: NavParams, public AuthService: AuthService, public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    })
  }

  /**
   * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
   */
  elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }

  /**
   * If the form is valid it will call the AuthData service (imported as AuthService which is different from the tutorial) to sign the user up password displaying a loading
   *  component while the user waits.
   *
   * If the form is invalid it will just log the form value, feel free to handle that as you like.
   */
  signupUser(){
    this.submitAttempt = true;

    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      this.AuthService.signupUser(this.signupForm.value.email, this.signupForm.value.password).then(() => {
        this.navCtrl.setRoot(HomePage);
      }, (error) => {
        this.loading.dismiss();
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
}
