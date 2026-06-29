// let n = 2;



// for(n=1; n<10; n++){
//     console.log('----- tabla del   '  +  n  +  '  --------')
//     for (x=1; x<10; x++){
//     console.log(x + 'x' + n, x*n)
// }

// }


// let acu = 0 ;

// for(i = 0; i<10; i++){
//     // if (i % 2 === 0 ){
//     //     acu += i;
//     //     console.log(i);
//     // }
//     let doble = i * 2;
//     acu += doble;

//     console.log(`El valor doble de la iteracion' ${i}, es ${doble} y su acumulacion es ${acu}`);
   
    

// }

// console.log(`el resultado acumulativo es ${acu}`);



let tamañoPiramide = 5;

for(i =1; i <= tamañoPiramide; i ++){
    let linea = '';
    for(j = 1; j <= tamañoPiramide-1; j++){
        linea += '';
        }
        for(k=1; k <= 2 * i - 1; k++){
            linea += '*';
        }
        console.log(linea);

}