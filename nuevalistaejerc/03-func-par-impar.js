//Crea una función que reciba un número y diga si es par o impar

function numeroParImpar(n){
    if ( n % 2 === 0){
        console.log('el numero es par', n)
    }else{
        console.log('el numero es impar', n)

    }
}

numeroParImpar(20);