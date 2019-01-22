import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ImagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImagesProvider {

  /**
   * @name _READER
   * @type object
   * @private
   * @description Creates a FileReader API object
   */
  private _READER : any = new FileReader();

  /**
   * @name _REMOTE_URI
   * @type String
   * @private
   * @description The URI for the remote PHP script that will handle the image upload/parsing
   */
  private _REMOTE_URI : string = "http://xampp/htdocs/ionic-uploada/php/parse-upload.php"
  
  constructor(public http: HttpClient) {
    console.log('Hello ImagesProvider Provider');
  }

}
