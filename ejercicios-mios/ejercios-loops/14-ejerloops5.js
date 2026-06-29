//Pide un número y calcula su factorial.

// let valor = 5;
// for(i=5; i<=5; i--){
//     valor *= i;
// }

function factorial(n){
    let resultado = 1;
    for(i=1; i<= n; i++ ){
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5));