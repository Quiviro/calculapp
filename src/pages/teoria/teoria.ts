import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teoria',
  templateUrl: 'teoria.html',
})
export class TeoriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeoriaPage');
  }

  tabla(x)
  {
    let construyeTabla:string = '';
    for (let i = 0; i <= 10; i++) {
      construyeTabla += '<p large><span>' + x + ' &nbsp; x &nbsp; ' + i 
      + ' &nbsp; = &nbsp; ' + x*i + '</span></p>';
    }
    document.getElementById("tablaMultiplicar").innerHTML = construyeTabla;
  }

}
