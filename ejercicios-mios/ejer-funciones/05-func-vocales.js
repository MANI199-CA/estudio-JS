//Haz una función que reciba una palabra y devuelva cuántas vocales tiene

function saberVocales(palabra){
    let dato = palabra.length;
    console.log(dato);
}

saberVocales('persona');

// aqui devulvi todas las letra de la palabra

function obtenerVocales (palabra){
    let vocales = ' ';
    let listaVocales= 'aeiouAEIOU';

    for(i = 0; i < palabra.length; i++){
        if(listaVocales.includes(palabra[i])){
            vocales += palabra[i];
        }
    }
    return vocales, vocales.length;

}
console.log(obtenerVocales('mani'));