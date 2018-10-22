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
    let resultado:number;
    let construirOperacion:string = '';

    // Math.floor(Math.random() * (max - min) + min);
    operando1 = Math.floor(Math.random() * (100 - 1) + 1);
    
    document.getElementById("resultado").style.display = "none";
    document.getElementById("numero").value = '';

    switch (operacion) {
      case 'sumar':
        operador = '+';
        operando2 = Math.floor(Math.random() * (100 - 1) + 1);
        resultado = operando1 + operando2;
        break;
      case 'restar':
        operador = '-';
        // sustraendo entre 1 y operando1 (ambos incluidos)
        operando2 = Math.floor(Math.random() * operando1 + 1);
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
        construirOperacion = 'ERROR';
        break;
    }
    construirOperacion = operando1 + ' ' + operador + ' ' + operando2 + ' = '; 
    document.getElementById("operacionMostrada").innerHTML = construirOperacion;
    document.getElementById("calculaccion").style.display = 'block';
    document.getElementById("resultado").value = resultado;
    return resultado;

  }

  comprobarResultado()
  {
    var numero = document.getElementById("numero").value;
    console.log('número: ' + numero);
    console.log('resultado: ' + this.mostrarOperacion('sumar'));
    /* if(numero)
    {
      if(numero == resultado)
      {
        console.log("acierto");
      }
      else
      {
        console.log("error");
      }
    } */
    document.getElementById("resultado").style.display = "inline";
  }
  

}
