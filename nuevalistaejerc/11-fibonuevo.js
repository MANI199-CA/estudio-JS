//Imprime los 10 primeros números de Fibonacci
let nu = 10
let a = 0
let b = 1
let reult = [];

for(let i = 1; i <= nu; i++){
    reult.push(a)
    let c = a + b;
    a = b;
    b = c;
}
console.log(reult);