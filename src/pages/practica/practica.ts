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

  mostrarBotonOperacion()
  {
    console.log("muestra botón");
    document.getElementById("botonOperacion").style.display = 'inline-block';
  }

  mostrarOperacion(operacion)
  {
    let operador:string;
    let operando1:number;
    let operando2:number;
    var resultado:number;
    let construirOperacion:string = '';

    // Math.floor(Math.random() * (max - min) + min);
    operando1 = Math.floor(Math.random() * (100 - 1) + 1);
    
    document.getElementById("resultado").style.display = "none";
    // document.getElementById("numero").value = '';

    switch (operacion) {
      case 'sumar':
        operador = '+';
        operando2 = Math.floor(Math.random() * (100 - 1) + 1);
        resultado = operando1 + operando2;
        break;
      case 'restar':
        operador = '-';
        // minuendo entre 1 y operando1 (ambos incluidos)
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
    var numero = document.getElementById("numero").value;
    console.log(numero);
    if(numero)
    {
      if(numero == resultado)
      {
        console.log("acierto");
      }
      else
      {
        console.log("error");
      }
    }

  }
  
  comprobarResultado(resultado)
  {
    document.getElementById("resultado").style.display = "inline";
  }
  

}
