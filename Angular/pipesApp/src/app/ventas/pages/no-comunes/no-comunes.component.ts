import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  nombre: string = 'Fernando';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarCliente(){
    this.nombre = 'Melissa';
    this.genero = 'Femenino';
  }

  borrarCliente(){

  }

  persona = {
    nombre: 'Cristhian',
    edad: 23
  }

}
