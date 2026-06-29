//Dibuja un cuadrado de * de 5x5 con bucles.


for (i = 0; i <= 5; i++){
    console.log('*    *    *    *    *');
}

for (i = 0; i <= 5; i++){
    console.log('*','      ','      ','   ','*');
}

for (i = 0; i <= 5; i++){
    console.log('*','      ','      ','   ','*');
}

for (i = 0; i <= 5; i++){
    console.log('*','      ','      ','   ','*');
}

for (i = 0; i <= 5; i++){
    console.log('*','      ','      ','   ','*');
}

for (i = 0; i <= 5; i++){
    console.log('*','      ','      ','   ','*');
}

for (i = 0; i <= 5; i++){
    console.log('*    *    *    *    *');
}



let size = 5;
let cuadrado = '';

for(fila = 0; fila < size; fila++){
    for(col = 0; col < size; col++){
        cuadrado += '* ';
    }
    cuadrado += '\n';
}

console.log(cuadrado);