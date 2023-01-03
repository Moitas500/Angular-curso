import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'okzeO59B8CLxsTWkkxhNxoDIoo2NJfLd';
  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }

  buscarGifs( query:string ){

    query = query.trim().toLocaleLowerCase();

    if ( !this._historial.includes( query ) ){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
    }

  }

}
