//Encuentra el número mayor de un array [4, 7, 1, 9, 2]

let aary = [4, 7, 1, 9, 2];

function ma(ar){
    let mayor = ar[0];
    let menor = ar[0];
    
    for (uni of ar){
    
    mayor = mayor > uni ? mayor : uni;
    menor = menor < uni ? menor : uni;
}
    return [mayor, menor];
}

let resul = ma(aary);
console.log(resul);