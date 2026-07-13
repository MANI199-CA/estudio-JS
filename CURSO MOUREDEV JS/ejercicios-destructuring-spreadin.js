 let animales = [ 'perro', 'gato', 'leon', 'tigre', 'lobo' ];
let user = {
     email: 'camachoalejandro96@gmail.com',
     name : 'manu',
     direccion : {
    calle: '29b',
    numero: 908
}}
//1- Usa destructuracion para extraer los dos primeros elementos de un array
let [var1, var2] = animales
console.log(var1)
console.log(var2)
//2-Usa destructuracion en un array y asigna un valor prederteminado a una variable
let [ va2,,,,, va1=0]= animales;
console.log(va1)
console.log(va2)
//3-Usa desturcturacion para extraer dos propiedades de un objeto 
let {email, name}= user;
console.log(email)
console.log(name)
//4- Usa destructuracion para extraer dos propiedades de un onjeto y asignalas a nuevas variables con nombres diferentes
let {name : nombre, email:correo} = user
console.log(correo)
console.log(nombre)
//5-Usa destructuracion paar extraer dos propiedades de un objeto anidado
let { direccion:{calle, numero} } = user
console.log(calle)
console.log(numero)
//6-usa propagacion par combinar dos arrays en uno nuevo 
let arr = [1,2,3,3,4,...animales]


console.log(arr)
//7- usa propagacion para crear una copia de un array
let nArr = [...arr, ...animales]

console.log(nArr)
//8- usa propagacion para combinar dos objetos en uno nuevo
let mascota ={
    animales: 'perros',
    nombre: 'macncha - nita',
    color: 'cafe',
    cantidad: 2
}

let personaje = {...user, ...mascota}

console.log(personaje)
//9-usa propagacion para crear una copia de un objeto
let pasarDatos = {...personaje}

console.log(pasarDatos)
//10-combina destructuracion con propagacion 
let [aaa, ...resto] = animales
console.log(resto)
console.log(aaa)