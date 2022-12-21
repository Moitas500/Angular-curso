interface Pasajero{
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Gabriel', 'Juliana']
}

function imprimeHijos(pasajeros:Pasajero): void{
    const cuantosHijos = pasajeros.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos(pasajero2);