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
    let operando1:number;
    let operando2:number;
    let resultado:any;
    let construirOperacion:any;

    // Math.floor(Math.random()) * (max - min) + min;
    operando1 = Math.floor(Math.random() * (100 - 1) + 1);
    

    switch (operacion) {
      case 'sumar':
        operador = '+';
        operando2 = Math.floor(Math.random() * (100 - 1) + 1);
        resultado = operando1 + operando2;
        break;
      case 'restar':
        operador = '-';
        operando2 = Math.floor(Math.random() * (operando1 - 1) + 1);
        resultado = operando1 - operando2;
        break;
      case 'multiplicar':
        operador = '*';
        operando2 = Math.floor(Math.random() * (10 - 1) + 1);
        resultado = operando1 * operando2;
        break;
      case 'dividir':
        operador = '/';
        // divisor entre 1 y operando1 (ambos incluidos)
        do {
          operando2 = Math.floor(Math.random() * operando1 + 1);
        } while (operando1 % operando2);
        resultado = operando1 / operando2;
        break;
      default:
        resultado = 'ERROR';
        break;
    }
    construirOperacion = operando1 + ' ' + operador + ' ' + operando2 + ' = ' + resultado; 
    document.getElementById("operacionMostrada").innerHTML = construirOperacion;
  }

}
