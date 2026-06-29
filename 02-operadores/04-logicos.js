// AND && , OR || , NOT !



/*si lo que se encuentra a la izquerda es TRUE y lo que se encuentra en la derecha es TRUE la respuesta 
TRUE, pero si uno de los lado es false la repuesta es false*/
console.log(true && true);
console.log(false && true);

/*CASO REAL NETFLIX CUANDO QUIERE ENTRAR UN MENOR DE EDAD CAMBIAR EL CONTENIDO DE PELICULAS*/

let mayor = true;
let suscrito = true;
let c = false
console.log(mayor && suscrito);
console.log(mayor && c);
console.log(mayor || suscrito || c);

//NOT ! INVIERTE EL VALOR SI ES TRUE LO CONVIERTE FALSE
console.log( 'operador NOT:',  !mayor );

