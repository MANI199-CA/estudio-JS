//Imprime los primeros 10 números de la serie Fibonacci.


// for (i= 1; i <= n ;i++){
//     console.log(a);
//     let c = a + b;
//     a = b;
//     b = c;
// }
let n = 10;
let a = 0;
let b = 1;
let result = [];


for (i= 1; i <= n ;i++){
    result.push(a);
    let c = a + b;
    a = b;
    b = c;
}

console.log(result);