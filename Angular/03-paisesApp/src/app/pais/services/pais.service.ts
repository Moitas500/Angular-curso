import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ termino }?fullText=true`;
    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }?fullText=true`;
    return this.http.get<Country[]>( url );
  }

  getPaisPorCodigo( id:string ): Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  buscarRegion( region: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url );
  }

}
