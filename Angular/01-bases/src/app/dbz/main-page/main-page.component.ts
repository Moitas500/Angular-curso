import { Component } from '@angular/core';
import { Personaje } from '../interfac/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];

  nuevo: Personaje = {
    nombre: 'Maestro rochi',
    poder: 1000
  }

  cambiarNombre( evento:any ){
    console.log(evento);
  }

}
