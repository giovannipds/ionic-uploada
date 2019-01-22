import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { ImagesProvider } from '../../providers/images/images';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /**
   * @name image
   * @type String
   * @public
   * @description Will store the selected image file data (in the form of a base64 data URI)
   */
  public image : string;

  /**
   * @name isSelected
   * @type Boolean
   * @public
   * @description Used to switch DOM elements on/off depending on whether an image has been selected
   */
  public isSelected : boolean = false;

  /**
   * @name _SUFFIX
   * @type String
   * @private
   * @description Will store the selected image's MimeType
   */
  private _SUFFIX : string;

  constructor(public navCtrl  : NavController,
              private _ALERT  : AlertController,
              private _IMAGES : ImagesProvider)
  { }

}
