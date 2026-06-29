//Pide una palabra y devuelve cuántas letras tiene.

function devolverCantidadLetras(palabra){
    return palabra.length

}

console.log(devolverCantidadLetras('persona'));


//  let palabra = 'mano';
// console.log(palabra.length)

// vocales
function cantidadvocales(palabra){
    let vocales = '';
    let listaVocales = 'aeiouAEIOU';

    for (i = 0; i < palabra.length; i++){
        if(listaVocales.includes(palabra[i])){
            vocales += palabra[i];
        }
}
return {
    letras: vocales,
    cantidad: vocales.length
};
}

let result = cantidadvocales('manos');
console.log(result);