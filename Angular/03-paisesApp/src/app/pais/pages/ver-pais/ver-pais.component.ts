import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit{

  pais!: Country;

  constructor( private activatedRouted: ActivatedRoute, private paisService: PaisService ){}

  ngOnInit(): void {
      this.activatedRouted.params
      .pipe(switchMap( ( param ) => 
      this.paisService.getPaisPorCodigo( param['id'] ) ),
      tap( console.log )
      )
      .subscribe( pais => {
        this.pais = pais
      })
  }

}
