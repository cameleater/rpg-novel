import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class Intro {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  goToHome(){
    this.navCtrl.setRoot('Tabs');
  }

  slideNext() {
  	this.slides.slideNext();
  }

}