import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PracticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-practica',
  templateUrl: 'practica.html',
})
export class PracticaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PracticaPage');
  }

  mostrarOperacion(operacion)
  {
    let operador:string;
    let operando1:number = 6;
    let operando2:number = 2;
    let resultado:any;



    switch (operacion) {
      case 'sumar':
        operador = '+';
        resultado = operando1 + operando2;
        break;
      case 'restar':
        operador = '-';
        resultado = operando1 - operando2;
        break;
      case 'multiplicar':
        operador = '*';
        resultado = operando1 * operando2;
        break;
      case 'dividir':
        operador = '/';
        resultado = operando1 / operando2;
        break;
      default:
        resultado = 'ERROR';
        break;
    }
    document.getElementById("operacionMostrada").innerHTML = 
    operando1 + ' ' + operador + ' ' + operando2 + ' = ' + resultado; 
  }

}
