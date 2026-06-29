//Número positivo o negativo:
//Pedir un número y decir si es positivo, negativo o cero.

console.log('Número positivo o negativo');

let vari = 0;

if (vari > 0){
    console.log(' el numero es positivo');
}else if(vari < 0){
    console.log(' el numero es negativo');
}else{
    console.log(' el numero es igual a 0');
}

console.log('Pedir dos números y mostrar cuál es mayor'); 

let lista = [1,2,4,5,210,-9];

function numeor(el){
    let mayor = el[0];
    let menor = el[0];

    for (e of el){
    
    mayor = mayor > e ? mayor : e;
    menor = menor < e ? menor : e;  
}
return [mayor, menor]
}

let resul = numeor(lista);
console.log(resul);

console.log(resul);


// recursividad 

function factorial(n){
    if (n == 1){
        return 1;
    }else{
        return   n * factorial(n-1);
    }
    
}

// let num = factorial(5);
console.log(factorial(4 ));

// factorial(5);


// let facto = 5;
// let i = 1 ;
// let re = 1;


// while ( i < 5){
    // facto = facto * i;
    // console.log(facto);
// }


let resultado = 1 ;
let nn= 5;
for (let i = 1; i <=nn; i++){
    resultado = resultado * i
    
}
console.log(resultado) ;


// function factorial(n){
//     let resultado = 1;
//     for(i=1; i<= n; i++ ){
//         resultado = resultado*  i;
//     }
//     return resultado;
// }

// console.log(factorial(4));




// function factorial(n){
//     let resultado = 1;
//     let i = 1
//     while (i <= n){
//         resultado = resultado * i;
//     }
//     // for(i=1; i<= n; i++ ){
//     //     resultado *= i;
//     // }
//     return resultado;
// }

// console.log(factorial(5));