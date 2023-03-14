import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
  styles: [
    `
    button{
      margin-right: 5px
    }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = "";
  paises: Country[] = [];

  constructor( private paisService: PaisService ){}

  activarRegion( region:string ){
    this.regionActiva = region;

    this.paisService.buscarRegion( region ).subscribe( 
      paises => this.paises = paises
     );
  }



}
