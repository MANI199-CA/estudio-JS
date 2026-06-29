 
//let color = 'gris'
//let animal = 'gato'
//let madre= 'kira'
//let edad= 3

/* Asi se hace un objects se declara una variable con let y ={ dentro de los corchetes
van los datos que caracterizan esa variable}; */
let muñeca = {
    color: 'gris' ,
    animal:  'gato',
    madre: 'kira',
    edad: 3,
};

/* Para llamar en consola solo ponemos la variable y si queremos solo llamar un dato
 especifico de el objects dentro del console.log( hay que pone el nombre de la variable
variable.datoEspecifico o variable['el dato especifico']); */
console.log(muñeca);
console.log(muñeca.animal);
console.log(muñeca['color']);

/*Para cambiar un dato de dentro del object se puede usar 
variable.datoEspecifico = 'cambiar el dato'  tambien se puede usar variable[] */
muñeca.color = 'gris y negro';
console.log(muñeca['color']);
muñeca['madre'] = 'kiraa';

/*Para eliminiar algun dato se usa delete variable.dato; */
delete muñeca.edad;

console.log(muñeca);


let miniMi = {
    colorPrimario: 'blanco',
    colorSecundario: 'negro',
    animal: 'perro',
    
};
console.log(miniMi);

