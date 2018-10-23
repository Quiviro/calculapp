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

  public operador:string;
  public operando1:number;
  public operando2:number;
  public resultado:number;
  public construirOperacion:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PracticaPage');
  }

  mostrarOperacion(operacion)
  {
/*     let operador:string;
    let operando1:number;
    let operando2:number;
    let resultado:number;
    let construirOperacion:string = ''; */

    // Math.floor(Math.random() * (max - min) + min);
    this.operando1 = Math.floor(Math.random() * (100 - 1) + 1);
    
    document.getElementById("resultado").style.display = "none";
    document.getElementById("numero").value = '';

    switch (operacion) {
      case 'sumar':
        this.operador = '+';
        this.operando2 = Math.floor(Math.random() * (100 - 1) + 1);
        this.resultado = this.operando1 + this.operando2;
        break;
      case 'restar':
        this.operador = '-';
        // sustraendo entre 1 y operando1 (ambos incluidos)
        this.operando2 = Math.floor(Math.random() * this.operando1 + 1);
        this.resultado = this.operando1 - this.operando2;
        break;
      case 'multiplicar':
        this.operador = '*';
        this.operando2 = Math.floor(Math.random() * (10 - 1) + 1);
        this.resultado = this.operando1 * this.operando2;
        break;
      case 'dividir':
      this.operador = '/';
        // divisor entre 1 y operando1 (ambos incluidos)
        do {
          this.operando2 = Math.floor(Math.random() * this.operando1 + 1);
        } while (this.operando1 % this.operando2);
        this.resultado = this.operando1 / this.operando2;
        break;
      default:
        this.construirOperacion = 'ERROR';
        return;
        // break;
    }
    this.construirOperacion = this.operando1 + ' ' + this.operador + ' ' + this.operando2 + ' = '; 
    document.getElementById("operacionMostrada").innerHTML = this.construirOperacion;
    document.getElementById("calculaccion").style.display = 'block';
    document.getElementById("resultado").value = this.resultado;
    return this.resultado;

  }

  comprobarResultado()
  {
    var numero = document.getElementById("numero").value;
    console.log('número: ' + numero);
    // console.log('resultado: ' + this.mostrarOperacion('sumar'));
    if(numero)
    {
      if(numero == this.resultado)
      {
        console.log("acierto");
      }
      else
      {
        console.log("error");
      }
    }
    document.getElementById("resultado").style.display = "inline";
  }
  

}
