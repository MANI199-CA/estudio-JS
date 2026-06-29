//Crea una función que reciba un array y devuelva el número más grande.


let ary = [4, 7, 1, 9, 2];

// function ma(ar){
//     let mayor = ar[0];
//     let menor = ar[0];
    
//     for (uni of ar){
    
//     mayor = mayor > uni ? mayor : uni;
//     menor = menor < uni ? menor : uni;
// }
//     return [mayor, menor];
// }

// let resul = ma(ary);
// console.log(resul);

let mayor = ary[0];
let menor = ary[0];
    
    for (uni of ary){
    
    mayor = mayor > uni ? mayor : uni;
    menor = menor < uni ? menor : uni;
    }

    console.log(mayor, menor);
