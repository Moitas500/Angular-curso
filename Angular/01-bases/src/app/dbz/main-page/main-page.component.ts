import { Component } from '@angular/core';
import { Personaje } from '../interfac/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro rochi',
    poder: 1000
  }

  cambiarNombre( evento:any ){
    console.log(evento);
  }

  constructor() { 

  }

}
