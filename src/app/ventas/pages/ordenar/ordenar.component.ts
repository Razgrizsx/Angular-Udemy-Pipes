import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  ordenar : string = '' 

 heroes : Heroe[] = [
  {
    nombre: "Superman",
    vuela: true,
    color: Color.azul
  },
  {
    nombre: "Batmann",
    vuela: false,
    color: Color.negro
  },
  {
    nombre: "Robin",
    vuela: false,
    color: Color.verde
  },
  {
    nombre: "DareDevil",
    vuela: false,
    color: Color.rojo
  },
  {
    nombre: "Green Lantern",
    vuela: true,
    color: Color.verde
  },
 ]

 orden = (value: string) => {this.ordenar = value, console.log(this.ordenar)}

}
