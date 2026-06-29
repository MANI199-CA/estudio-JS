/* los objetos son dinamicos se le pouede agregrar y eliminar y modificar valores y propiedades de los objetos
*/

//si el objeto tiene pocas propiedades entran en una linea si verse 
// feo se puede pero deoende de el grupo de programadores

// las const no se pueden cambiar son fija pero en objetos si veamos ejemplo
const user = {id : 1};
user.name = 'manu';
user.guardar = function(){
    console.log('guardando', user.name);
};
//console.log(user);

//user.guardar();

delete user.guardar;
delete user.name;

console.log(user);

// si creo una const que es un objeto se puede agregar y eliminar propiedades asi como modificar valores
//de las propiedades del objeto
//si embargo si quiero hacer que un objeto de plano no se pueda modificar ni agragar 
// se usa object.freeze() este no permite ni agragar ni modificar valores de propiedades

const usi = Object.freeze( {
    nombre : 'namu'
});
usi.usu = 35;
usi.nombre = 'manu';    
console.log(usi);
// como veo en consola no se modifico nada
// sin embargo si yo uso object.seal() me permite modificar valores pero no agragar propiedades

const usi2 = Object.seal({
    name: 'perrito',
});
usi2.name = 'perrito de la calle';
usi2.lugar = 'callecita';
console.log(usi2);