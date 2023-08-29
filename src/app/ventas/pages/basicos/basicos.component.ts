import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombrelower : string = "nombre"
  nombreupper : string = "NOMBRE"
  nombreCompleto: string = "NomBre"

  fecha : Date = new Date()
}
