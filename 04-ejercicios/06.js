let aray = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr){
    let cantidad = 0;
    for (elemento of arr){
        if (elemento > 0 ){
            cantidad++;
        }
        
    }
    return cantidad;
}

let result = cuantosPositivos(aray);
console.log(result);

//para que me retorne la cantidad de datos negativo
let Ah = [2, 3, 4, 5, -84, 2, -9, -34, -3];

function xx(Ah){
    let j = 0;
    for(l of Ah){
        if(l < 0 ){
            j++;
        }
    }
    return j;
}

let ahh = xx(Ah);
console.log(ahh);