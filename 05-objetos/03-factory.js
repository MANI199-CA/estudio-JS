//factory function o funciones fabrica crean objetos repetitivos

// //let user = {
//      email: 'camachoalejandro96@gmail.com',
//      name : 'manu',
//      direccion : {
//     calle: '29b',
//     numero: 908
// },
// activo : true,
// recuperarClave: function(){
//     console.log('recuperando clave');

// },
// }

// las factory usan por convencion en el nombre camelCase y siempre o casi siempre inician 
// por crearAlgo o createSomething
function crearUsuario(nombre, email, direccion){
      return {
    email, //si yo modifico el valor de la variable por el nombre del parametro es para que cuando y
     // yo modifique el argumento se modifique solo ademas si el nombre de la propiedad es igual al parametro 
     // puedo eliminar email : email y solo dejar email como en el ejemplo.
     name: nombre,
     direccion,
activo : true,
recuperarClave: function(){
    console.log('recuperando clave');

},
}
}

let usuario1 = crearUsuario('manu ', 'camachoalejandro.96@gmail.com', {calle: '29b', numero: 908});
let usuario2 = crearUsuario('pepito casasola ', 'pepitocasasola.96@gmail.com', {calle: '29b', numero: 911});

console.log(usuario1, usuario2);

// ASI GENERO FUNCIONES QUE RETORNEN DATOS REPETITIVOS PERO SI QUIERO QUE CAMBIEN VALORES AGREGO PARAMETROS Y ARGUMENTOS