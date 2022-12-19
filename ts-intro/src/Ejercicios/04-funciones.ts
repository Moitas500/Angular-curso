interface PersonajeLOR{
    nombre:string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje:PersonajeLOR, curarX:number):void{
    personaje.pv += curarX;
    
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp(); 