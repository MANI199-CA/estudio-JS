//Invierte una palabra (ejemplo: "hola" → "aloh").

let palabra = 'hola';

let palabra2 = ['h', 'o', 'l', 'a'];

console.log(palabra2.reverse());

function invertirPalabra(palabra){
    return palabra.split('').reverse().join()
//.split (convierte el string en array).reverse(hace reversa en el array).join(vuelve a comvertir a string)

}
console.log(invertirPalabra('mano'));