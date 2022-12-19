interface Reproductor{
    volumen:  number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        anio: 2000,
        autor: "Ed sheeran"
    }
}

const {volumen, segundo, cancion, detalles:{autor: autorDetalle}} = reproductor;
//const {autor} = detalles;

console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es de: ', segundo);
console.log('La cancion actual es de: ', cancion);
console.log('El autor es: ', autorDetalle);