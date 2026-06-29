// van a existir momentos cuando quiera detener la ejecucion de alguno de los loops 
// podria cuando ya encontramos u elemento en particular o un calculo ya hevho
//break permite salir del loop y continue nos permite saltarno o omitir una iteracion


// while(i < 6){
//     i++
//     if(i === 2){
//         continue;
//     }
//     console.log(i);
// }

let i = 0 ;
while(i < 10){
    i++;
    if(i === 2){
        continue;
    }
    if(i === 4){
    continue;

    }
    if (i === 6){
        continue
    }
    if(i === 7){
        continue
    }
    if(i === 9){
        break
    }
    console.log(i);
};