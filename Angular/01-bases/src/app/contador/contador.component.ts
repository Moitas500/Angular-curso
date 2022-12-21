import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    templateUrl: './app.component-contador.html',
})
export class ContadorComponent{
    public title: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;
  
    acumular( valor:number ){
      this.numero += valor;
    }
  
    sumar(){
      this.numero += 1;
    }
  
    restar(){
      this.numero -= 1;
    }
}