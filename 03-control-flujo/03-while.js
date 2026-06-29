// while (condicion) {si la condicion se cumple entonces ejecutar el codigo }
//se crea una variable y una condicion por convencion la variable es i     let i

//valor inicial es 0 
let i = 0;
/*while (i < 10) {
    console.log(i);
    i++;

}
console.log('fuera del while');*/

while (i < 15 ) {
    if (i % 2 === 0){
        console.log('este es un numero par',i);

    }
    
    i++;

}
console.log('fuera del while');

while (i < 15 ) {
    if (i % 2 !== 0){
        console.log('este es un numero par',i);

    }
    
    i++;

}
console.log('fuera del while');