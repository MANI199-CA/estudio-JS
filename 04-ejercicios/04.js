let i = 0
// while(i < 10){
//     if (i % 1 === 1){
//         console.log('este numero es impar');
        
//     }
//     i++;
// }

// lo hicimos semi bien pero en la condicion  WHILE debimos poner (i <= 0) 
// en la condicion de if debimos poner (i % 2 !== 0)
//no imprimimos en consola la variable i

while(i <= 10 ){
    if (i % 2 !== 0){
        console.log('impar', i)
    }
    i++;

}