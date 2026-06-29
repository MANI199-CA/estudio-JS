//Une dos arrays en uno solo (ejemplo: [1,2] y [3,4] → [1,2,3,4])

let array1 = [1,2];
let array2 = [3,4];

//dos dormas de unir dos arrays

let resultp = array1.concat(array2);
let su = [...array1, ...array2]; // ... se llama spread operator
array1.push(...array2);


console.log(array1);

//Encuentra el número más grande en un array

function hallarNumeroMayor(ar){
    let mayor = ar[0];

    for(elment of ar){
        mayor = mayor > elment ? mayor : elment
    }

    return mayor
}

let result = hallarNumeroMayor(array1);

console.log(result);

