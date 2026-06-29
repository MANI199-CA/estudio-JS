//Crea un objeto persona con nombre, edad, ciudad y un método presentarse()

function usuario(nombre, edad, ciudad){
    return{
    nombre,
    edad,
    ciudad,
    presentarse: function(){
        console.log('hola, como estas? mi nombre es', nombre); 
    },
}
}

let usaer1= usuario('mani', 25, 'merida')

console.log(usaer1);












function crearUsuario(name, email, direccion){
      return {
    email, 
     name,
     direccion,
activo : true,
recuperarClave: function(){
    console.log('recuperando clave');

},
}
}

let usuario1 = crearUsuario('manu ', 'camachoalejandro.96@gmail.com', {calle: '29b', numero: 908});
console.log(usuario1);