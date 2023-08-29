import { Component } from '@angular/core';
import { interval } from 'rxjs'

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  nombre : string = "Chris"
  genero : string = 'masculino'
  invitacion = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  clientes :string[] = [
    "María",
    "Juan", 
    "Pedro",
    "Miguel"
  ]


  clientesMap = {
    "=0" : 'no tenemos ningun cliente esperando.',
    "=1" : 'tenemos un cliente esperando.',
    "other" : 'tenemos # clientes esperando.'
  }


  persona = {
    name: "Chris",
    age: 32,
    address: 'Ayacucho 123'
  }

  jsonPipe = [
    {
      name: "Superman",
      fly: true
    },
    {
      name: "Robin",
      fly: false
    },
    {
      name: "Aquaman",
      fly: false
    }
  ]


  observable = interval(1000)

  promesa = new Promise((resolve, reject) => {
    setTimeout(() => 
    resolve("Resolved")
    , 3500)
  })
}
