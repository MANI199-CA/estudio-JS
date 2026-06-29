// todos los objetos tieenen una propiedad oculta llamada constructor
// y nos indica con que constructor fue creada este object

// se puede crear objetos asi 
// let obj = {};    o   let obj = new object()
let obj = {};
let obj2 = new Object();

/**
 * new array(); crean [] 
 * new string (); '' ¨¨  `` 
 * new  number (); simplemente agragar un numero 12
 * new boolean();  true false
 
 */ 

function Usu(){
    this.name =  'manu';

}

let usu = new Usu();
console.log(usu.constructor);

//los numeros, string, boolean literales creados normal se comprotan diferente a los q fueron creados por new 
//puede generar errores si se usan mal
// el new String ('1+1'); en consola imprime tal cual String {'1+1'} envuelve el string en un objeto y le asigna indice apartir de 0 como array

const s1 = '1+1'; 
const s2 = new String('1+1');

//console.log(s1, s2);
console.log(eval(s1), eval(s2));
//si evaluo esos valores con eval()  y intentamos interpretar dentro de javascript
// mejor usar los tipos de datos literales y no con new pero si necesitamos usar new y luego obtener su 
// valor usamos metodo  console.log( Variable.valueof() ); y me devuelve el valor como dato normal

console.log(s2.valueOf()); 