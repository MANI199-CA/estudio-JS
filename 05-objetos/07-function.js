//existe un constructor que se llama function y tienen otras propiedades que nos serviran para reusar codigo

// LO IMPORTANTE DEL VIDEO
// para crear funciones es recomendable usar la forma normal y si quiero extender o agregar propiedades extras a 
// la funcion sustituyo el objeto this por una variable lac cual se le asignara la { propiedad : extra }
// y para agregar usamos NombreFuncion.apply( variableConnuevaPropiedad, [argumentos] ) aqui los argumentos 
// se deben poner en [ como array]   

//  NombreFuncion.call( variableConnuevaPropiedad, [argumentos] ) que son basicamente lo mismo pero aqui
//  los argumentos sin []
// son como para agragar prpiedades y parametros nuevos

function Punto(x, y){
    this.x = x;
    this.y = y;
    this.dibujar = function(){console.log('dibujando...');}  // metodo dibujar funcion dentro de funcion constructora 
    // es llamada metodo
}

let punto = { z: 7,}; //la variable punto es igual al nuevo parametro/propiedad {z : 7}
//Punto.call(punto, 1, 2);
Punto.apply(punto, [1,2]);
console.log(punto);

// esto imprime en consola     {z: 7, x: 1, y: 2, dibujar: ƒ} se ve que agraga la nueva propiedad









// let Point = new Function('x', 'y', `this.x = x;
//     this.y = y;
//     this.dibujar = function(){console.log('dibujando...');} `);

// const p = new Point (2 , 3);
// console.log(p);

//asi se crean funciones usando el constructor function APRENDER Y OLVIDAR NO SE USA 
