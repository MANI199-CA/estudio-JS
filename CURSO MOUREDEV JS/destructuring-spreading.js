// destructuracion permiteextraer valores a array o listas y asignarlos en oreden a variables

// destructuracion de arrays
let myArray = [2, 3, 1, 2, 3]

let [variable1, , variable3, variable4, variable5, variable6 = 23]= myArray;
/*en array si esto inicializando variables usando let puedo dar valores por defecto a las variables sin embargo si ya 
fuern iniciadas y yo quiero redefrinir no puedo dr valores por defecto*/ 
console.log(variable1);
console.log(variable3);
console.log(variable4);
console.log(variable5);
console.log(variable6);

//destructuracion de objetos


let myObject = {
    vehiculo: 'chevrolet',
    color: 'azul',
    año: 1969,
    puertas: 2
}

// en destructuracion de objetos el nombre de las variables debe ser igual al nombre de la propiedad del objeto
let {vehiculo, color, año, var2}= myObject;
console.log(vehiculo)
console.log(var2)


/*spreading (...) expandir los valores de un objeto o array sacarlos de la caja y ponerlos en otra
pienso que es como usar un forEach y un push */ 

let myArray2 = [...myArray];

console.log(myArray2);

/* aparte de usar el operador spread para guardar los valores de un array dentro de otro tambien podemos agregar valores nuevos en la 
inicializacion del nuevo array como en este caso que agregamos el 5 y el 23 ademas de los valores del otro array*/


let array3 =[...myArray2, 5, 23];

console.log(array3)

// tambien podemos combinar varios array o concatenarlos

let arrayMasivo =[...myArray,...array3,...myArray2];
console.log(arrayMasivo)

/*SPREADING DE OBJETOS muy similar a la de los arrays pero aqui se usa {} */

let newObject= {...myObject};
console.log(newObject)

/*en este ejemplo no solo creamos un nuevo objetos usando ... con los valores de otro objeto, sino que tambien agregamos un
nueva propiedad*/
let objectMas= {...myObject, motor: 'estandar'};

console.log(objectMas)



const transaccion = {
    id: 101,
    monto: 450,
    categoria: 'Moto',
    fecha: '2026-07-06'
};

// Aplicamos destructuración y spreading:
const { monto, fecha, ...resto } = transaccion;

console.log(monto);
console.log(fecha);
console.log(resto);

console.log('hola mundo')