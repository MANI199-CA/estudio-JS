//calcula el precio final de un producto con 16% iva

function precioIva (precio, impuesto){
    let valorImpuesto = impuesto / 100;
    return precio + (valorImpuesto*precio)
}

let resultado = precioIva(20, 16);

console.log(resultado);

//henry