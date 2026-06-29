//las funciones son objetos llamados objetos de primera clase
//significa que tienen propiedades como los objetos 
// podemos asignarlas a variables o constantes
// las podemos pasar como argumentos a otras funciones
// las funciones pueden ser retornadas en otras funciones

function Usuario(nombre){
    this.name = nombre;
    return 'hola como estas', nombre;
}
//para ver las propiedades de funciones o objetos de primera clase
console.log(Usuario.name); // para que imprima el nombre de la funcion
console.log(Usuario.length); // para saber la cantidad de argumentos que reciben


// las funciones se le pueden asignar a una variable

//const u = Usuario;
let user = new Usuario('manu');
let user6 = new Usuario('pepito mayans');
// uso new para indicar nuevo algo en este caso nueva funcion con argumento
console.log(user);
console.log(user6);

//aqui puedo usar funciones como parametros y como argumentos para una funcion 
function of(Fn, arg){
    return new Fn(arg);

}


let user1 = of(Usuario, 'manus');
console.log(user1);

// podemos retornar funciones dentro de dunciones
function returned(){
    return function(){// podemos o no agragar nombre a esta funcion en este caso es anonima
        console.log('hola manu');
    }
};

let saludo = returned();

//ejecutar funcion
saludo()
