interface Direccion{
    calle: string;
    pais: string;
    ciudad: string;
}

interface SuperHeroe{
    nombre: String;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
    nombre: "Spiderman",
    edad: 30,
    direccion: {
        calle: 'Mainstreet',
        pais: 'Estados unidos',
        ciudad: 'New york'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);