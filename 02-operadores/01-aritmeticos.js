let a = 5;
let b = 7;
let c = 7;
let d = 5;

console.log(a + b, 'adicion');  //operador de adicion o suma +
console.log(a - b, 'resta');  //operador de resta -
console.log(a / b, 'division');  //operador de division /
console.log(a * b, 'multiplicacion');  //operador de multiplicacion *
console.log(a ** b, 'potencia'); //operador de potencia **
console.log(c % d, 'modulo');  //operador de modulo %   
console.log(a % b, 'modulo');  //operador de modulo %  

/*modulo % es la parte que sobra de una divicion, si el dividendo o el numero que esta arriba es
mejor que el divisor siempre sera igual al numero de arrida 5 % 7 == 5 y 7 % 5 == 2 por que 5 entra una 
ves en 7 y sobran 2.*/

//operador de incremento ++ aunmenta el valor inicial mas una ves 5+1=6
console.log(++a);
console.log(a++);
console.log(a);

//operador de decremento
console.log(--a);
console.log(a--);
console.log(a);



let ab = 10;
console.log(ab++);
console.log(ab);