//Cuenta cuántas veces aparece un número en un array.

let numeros = [1, 2, 2, 2, 3, 1, 2, 4, 5]; 

console.log(numeros.includes(2));


// manuera para contar cuantas veces aparece un numero en un array
function hallarCantidad(arr , numero){
    let cantidad = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === numero){
            cantidad++
        }
    }
    return cantidad
}

console.log(hallarCantidad(numeros, 2));

// opcion mas moderna con .filter() este nos srive cuando queremos buscar un num en especifico

function contar(arr, nume){
   // el filter busca dentro del array y devuelve un array con los datos filtrados
    return arr.filter(n => n === nume).length // aqui usamos el length para que solo de la cantidad de datos del array que dio filter()
}

console.log(contar(numeros, 1));

// otra forma, esta forma del objeto sirve para conover la cantidad de todos los numeros

function hallar(arrr){
    let conteo = {}
    for( let el of arrr){
        conteo[el] = (conteo[el] || 0) + 1
    }
    return conteo
}

console.log(hallar(numeros));
