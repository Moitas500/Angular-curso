export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 350
}

const tableta: Producto = {
    desc: 'Aipad',
    precio: 100
}

export function calculaISV(productos: Producto[]): [number,number]{
    let total = 0;

    /*
    productos.forEach( (producto: Producto) => {
        total += producto.precio;
    })
    */

    productos.forEach( ( {precio} ) => {
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos = [telefono, tableta];

const [total, isv] = calculaISV(articulos);

console.log("Total: ", total);
console.log("ISV: ", isv);
