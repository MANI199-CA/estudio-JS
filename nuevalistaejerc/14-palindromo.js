//Crea una función que reciba una palabra y devuelva true si es palíndromo (ejemplo: “oso”, “reconocer”).

function palindromo(palabra){
    palabra = palabra.toLowerCase(); // .tolowercase() srive para convertir en minusculas

    let invert = palabra.split('').reverse().join('');

    return palabra === invert;


}

console.log(palindromo('conocer'));

let pala = []
 
