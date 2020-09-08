import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAdivina;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  private subscription: Subscription;
  ngOnInit() {
  }
   constructor() {
     this.ocultarVerificar=true;
     this.Tiempo=5; 
    this.nuevoJuego = new JuegoAdivina();
    console.info("Inicio agilidad");  
  }
  NuevoJuego() {
    this.ocultarVerificar=false;
   this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }
      }, 900);

  }
  verificar()
  {
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);
   

   
  }  

}
