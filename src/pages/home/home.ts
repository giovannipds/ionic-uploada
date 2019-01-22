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

  /**
   * @public
   * @method selectFileToUpload
   * @param event {any} The DOM event that we are capturing from the File input field
   * @description Handles the selection of image files from the user's computer,
   *              validates they are of the correct file type and displays the
   *              selected image in the component template along with an upload
   *              button
   * @return {none}
   */
  selectFileToUpload(event) : void
  {
    this._IMAGES
    .handleImageSelection(event)
    .subscribe((res) =>
    {
      // Retrieve the file type from the base64 data URI string
      this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];

      // Do we have correct file type?
      if(this._IMAGES.isCorrectFileType(this._SUFFIX))
      {
        // Hide the file input field, display the image in the component template
        // and display an upload button
        this.isSelected = true
        this.image      = res;
      }

      // If we don't alert the user
      else
      {
        this.displayAlert('You need to select an image file with once of the following types: jpg, gif or png');
      }
    },
    (error) =>
    {
      console.dir(error);
      this.displayAlert(error.message);
    });
  }

  /**
   * @public
   * @method uploadFile
   * @description Handles uploading the selected image to the remote PHP script
   * @return {none}
   */
  uploadFile() : void
  {
    this._IMAGES
    .uploadImageSelection(this.image,
                          this._SUFFIX)
    .subscribe((res) =>
    {
      this.displayAlert(res.message);
    },
    (error : any) =>
    {
      console.dir(error);
      this.displayAlert(error.message);
    })
  }

}
