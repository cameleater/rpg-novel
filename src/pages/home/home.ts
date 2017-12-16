import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public navCtrl: NavController, public storage: Storage, public alertCtrl: AlertController) {

  }

  resetOnBoard () {
    this.storage.set('introShown', false);
    this.showAlert();
  }

  showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Success',
    subTitle: 'Refresh your browser/app and you will be shown on-boarding screens again.',
    buttons: ['OK']
  });
  alert.present();
}

}
