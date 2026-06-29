//Haz una función que calcule el área de un círculo.

function sacarAreaCirculo (diametro){
    let radio = diametro/2;
    let pi = 3.14;
    let result = pi * (radio**2);
    
    return result;
}

let area = sacarAreaCirculo(20);
console.log(area);