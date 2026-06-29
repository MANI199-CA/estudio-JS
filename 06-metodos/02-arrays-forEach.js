//forEach es un metodo para arrays sirve 
// para recorrelos arrays y para darle una funcion a cada elemento del array
// analogia por cada elementpo de est lista quiero que haga algo

let frutas = ['manzana', 'pera', 'mango', 'uva', 'fresa' ];

frutas.forEach(function(element){
    console.log('quiero', element)
})

// Array.forEach(function(elemento, indice del array, array){     })
// dentro de los parametros de la funcion podemos agregar esos valores indice opcionalmente
// al igual que el parametro array es opcional

let numeros = [1, 2, 3, 4]

numeros.forEach(function(numero, i){
    console.log('los numeros son', numero, 'posicion', i);

})


// comparacion con un bucle for

console.log('comparacion for y forEach');

for(i= 0; i < frutas.length; i++){
    console.log('esto con un bucle for -',frutas[i]);
}

frutas.forEach((fruta, i) =>
    console.log('esto con el forEach' ,fruta, 'su posicion es', i)
);

//cuando usar el forEach 
// cuando quieres recorrer un array y indicar que se ejecute algo en cada elemento

//perfecto, para imprimir, sumar, o hacer acciones que no necesiten romper el ciclo
// IMPORTANTE!! no se puede usar break y continue dentro de un forEach
//IMPORTANTE!! si quieres que el recorrido se pare en algun momento mejor usar for o for ... of

let suma = 0;

numeros.forEach(function(numero){
    suma += numero; // la variable suma le voy sumando cada numero o elemento del array
});
console.log('el valor de suma es', suma) // aqui vemos que el valor de suma se actualizo a 10 cuando en un inicio era 0




