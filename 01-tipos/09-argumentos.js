/*para que las funciones sean mas flexibles se usasn funcionalidades llamadas 
los parametros y argumentos*/

/*let a = 5;
let b = 10;*/

/* ya en la  funcion en lo () que lleva el nombreDeLaFuncion(aqui agregare la cantidad de argumentos pero
aqui se llamaran parametros)   */


function suma(a , b, c){
    return a+b*c;
};

/*Si yo creo una variable y esta es igual a el nombre de la funcion dentro de los ()
del nombreDeLaFuncion() agregar argumentos como en el ejemplo (1, 84, 30) los parametros dentro de los 
{} de la duncion funjiran como letras (a, b, c, d, e) dependera de la cantidad de argumentos  */


let resultado = suma(1, 3, 4);
let resultadOtro = otro(10, 5, 10, 1, 3, 4); 

function otro(a, b, c){
    console.log(arguments);
    return a-c;

};

/*solo imprimimos el nombre de la variable la cual tiuene como igual el resultado de la funcion*/


console.log(resultado);
console.log(resultadOtro);

/*para acceder a todos los valosres de los parametros de una funcion se usa el console.log(arguments); */

function prueba(a, b){
    if (a > b){
        console.log('A es mayor');
    }else if (a < b) {
        console.log('B es mayor');
    } else{ 
        console.log('los datos son iguales');

    }

}


prueba(2,2);