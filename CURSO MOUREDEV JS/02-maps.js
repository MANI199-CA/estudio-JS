/*
los maps son similares a los objetos, los maps se pueden iterar con forEach y asi 
*/


let myMap = new Map();
// asi se inicializa un  map
 myMap = new Map([
    ['vehiculo', 'chevrolet'],
    ['color', 'azul'],
    ['año', 1969]
]);


// asi agregamos valores al map

myMap.set('motor', 'v8');

//

// asi verificamos si existe una clave el HAS devuelve booleans
console.log( myMap.has('coche')) //false
console.log(myMap.has('color')) //true

console.log(myMap)

myMap.delete('color') // usamos DELETE para eliminar un valor en especial
myMap.clear() // usamos CLEAR  para borrar el set entero

// keys y values

myMap = new Map([
    ['vehiculo', 'chevrolet'],
    ['color', 'azul'],
    ['año', 1969]
]);

console.log( myMap.keys()) // KEYS devuelve las claves que contiene el map
console.log( myMap.values()) // VALUES devuelve los valores que contiene el map
console.log( myMap.entries()) // ENTRIES devuelve keys-values  que contiene el map



console.log(myMap.get('vehiculo')); /* usamos get() para visualizar o obtener el valor de una propiedad escomo si hicieramos console.log(myMap.vehiculo) 
                                    esto si fuera un objeto y no un map*/