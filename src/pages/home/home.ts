import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public AuthService: AuthService, 
    public formBuilder: FormBuilder, public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController, public navParams: NavParams) {
}

logout(){
this.navCtrl.push(LoginPage);
}

/*country: FirebaseObjectObservable<any>;
countryList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, af: AngularFire) {
    this.countryList = af.database.list('/countryList', {
      query: {
        orderByChild: "population",
        startAt: 50000000,
      }
  }); 

      this.country = af.database.object('/countryList/colombia');
      const currentCountry = af.database.object('/countryList/colombia');
      currentCountry.remove()
      .then( deletedCountry => {
      this.navCtrl.pop();
}
*/
}