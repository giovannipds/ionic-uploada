import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { ImagesProvider } from '../../providers/images/images';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
