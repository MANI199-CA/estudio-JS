// /* aprender logica de programacion


// // 1- usamos diagramas de flujo de datos y pseudocodigo
// // 2- pasamos el diagrama o el pseudocodigo a codigo por medio de un lenguaje de programacion para crear soluciones 
// // sencillas o complejas con el uso de funciones, matrices, recursividad, creacion de mis propias librerias entre otros

// // usare algorimos de busqueda,ordenamiento y reestructurar algoritmos.

// // pensamiento logico {deductivo, analitico, organizado}

// // realizar abtracion y detencion de variables
 
// //   para hacer mas sencillo el resolver un problema 
// // identificar necesidad a resolver



// /*

// En el sistema de control escolar cada profesor registra la calificacion que cada alumno obtiene en sus tareas, trabajos,
// exposiciones y en base a eso obtiene el promedio, internamente el sistema ejecuta el siguiente algoritmo cuantitativo.


// 1- inicio                         1- inicio
// 2- identifica y suma              2- promedio = (tareas + trabajos + exposiciones) / numero de elementos
// 3- divide                           2-1- promedio = (8.5m + 6.4 + 7.2) / 3 
// 4- muestra                        3- promedio = 7.3 
// 5-fin                             4-fin
// */

// function sacarPromedio(tareas,trabajos,exposiciones,cantElementos){
//   let promedio = (tareas + trabajos + exposiciones) / cantElementos
//   return promedio

// }

// console.log(sacarPromedio(8.5, 6.4, 7.2, 3));

// //obtencion de edad 

// function hallarEdad(añoActual, añoNacimiento){
//   let edad = (añoActual - añoNacimiento);

//   return edad;

// }

// console.log('la edad es', hallarEdad(2025, 1999), 'años');

// let modulo = ((15*30)-(12**2)+(45**3)+(49 % 7));
// console.log(modulo);

// let op1 = 16 + (3 + 3**2) - 6/6;
// console.log(op1);

// let op2 = ((45 < 120) || (12 < 120));
// console.log(op2);

// let op3 = ((6 != 6) && (12>20));
// console.log(op3)

// let op4 = !(128 < 145 && 12>9);
// console.log(op4)

// let i = 2;
// let adicion = 0;
// // while(i < 50){
// //   console.log(i   );
// //   i+=5
// // }


// // do{
// //   if (i % 2 === 0 ){
// //     console.log(i);
// //   }
// //   i++
// // }while(i<=30)

// do{
//   adicion = adicion + i
//   console.log(adicion);
//   i += 2
  
// }while(i <= 30)

// let resulttt = 1552 / 4;
// console.log(resulttt);


let miniMi = {
    colorPrimario: 'blanco',
    colorSecundario: 'negro',
    animal: 'perro',
    
};
console.log(miniMi);

miniMi.lugar = 'casa de mis papas';
miniMi['madre'] = 'samantha';


function sumnum(n1, n2){
    let n3 = n1 + n2;
    alert ('el resultado de la suma de' + n1 +'y' + n2 + 'es igual a' + n3);
}

let resol = sumnum(
    document.getElementById('primer'), document.getElementById('segundo'));

console.log(resol);

let n = 10;
let suma = 0;

for(let i = 0; i < n; i++){
    suma = suma + 1
    
}
console.log(suma);