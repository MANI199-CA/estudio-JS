/*
los SETS son parecidos a los array sin embargo no tienen el mismo comportamiento no se manejan 
por indices, y los elementos son unicos no se pueden duplicar.
*/


let mySet = new Set()  // declaramos la variable que contena el set

mySet.add('chevrolet', 'ford', 'nissan', 'toyota');  // usamos ADD para agregar valores al set 
mySet.add( 'toyota');
mySet.add( 'ford');
mySet.add('nissan');

mySet.delete('toyota'); // usamos DELETE para eliminar un valor en especifico



console.log(mySet);

console.log(mySet.has('toyota'))     // usamos HAS para verificar si existe algun valor 
console.log(mySet.has('chevrolet'))  // el HAS no dara un boolean es algo asi como un condicional


// como mencione cada valor que se ingresa en el set es unico no se puede duplicar deveriamos tener
// 6 valores sin embargo el ultimo add no aplico por que se repite, pero el TOYOTA en mayus si se aplico 
// por que el valor esta en mayuscula y se considera como si fuera otra palabra 
mySet.add('toyota');
mySet.add('TOYOTA');
mySet.add('toyota');

console.log(mySet); 

console.log(mySet.size); // asi verificamos el tamaño del set es como si fuera el length del array