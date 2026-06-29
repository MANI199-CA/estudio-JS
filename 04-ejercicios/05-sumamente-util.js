// //crear algoritmo que devuelva numero menor y mayor de un array

// let array = [2, 5, 7, 15, -5, -100, 55];

// function getMenorMayor (array){
//     let menor = array[0];
//     let mayor = array[0];

//     for (numero of array){
//         menor= menor < numero ? menor : numero;
//         mayor= mayor > numero ? mayor : numero; 
//     }
//     return [menor, mayor];
// }

// let numeros = getMenorMayor(array);
// console.log(numeros);



let arri = [1, 2, 3, -1, -10, 100];


// console.log(arri);

function pruebaMenorMayor(arri) {
    let me = arri[0];
    let ma = arri[0];

    for (numerito of arri){
        me= me < numerito ? me : numerito;
        ma= ma > numerito ? ma : numerito;
    }

    return [me, ma];
}


let esResultado = pruebaMenorMayor(arri);
console.log(esResultado);