//Crea una factory function crearAnimal(nombre, tipo) que devuelva un objeto con método hacerSonido().


// let animales = {
// //     nombre: 'leon',
// //     tipo: 'carnivoro',
// //     hacerSonido: function() {
// //         console.log('wuaaarrr');
// //     },
// // }

// // console.log(animales);

function crearAnimal (nombre, tipo, sonido){
    return{
        nombre,
        tipo,
        hacerSonido: function(){
            return sonido;
        }
    }
}

let animal1 = crearAnimal('leon', 'carnivoro', 'wuaar');

console.log(animal1);

