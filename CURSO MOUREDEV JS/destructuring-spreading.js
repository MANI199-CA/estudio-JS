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

let {vehiculo, color, año, var2}= myObject;
console.log(vehiculo)
console.log(var2)