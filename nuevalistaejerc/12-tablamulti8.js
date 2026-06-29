//Genera la tabla de multiplicar del 8 (del 1 al 10).

console.log('tabla del 8 con blucle for...of')
let numerosParaMultiplicar =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for ( let num of numerosParaMultiplicar){
    let multi = num * 8;

    console.log(multi);

}



console.log('tabla del 9 con bucle for')
for (let i = 1; i <= 10; i++){
    let result = i * 9;
    console.log(result);
}