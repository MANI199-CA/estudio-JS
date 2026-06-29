// determina si un valor es positivo, negativo o igual a 0


function ingresaNumero(valor){
    if(valor < 0){
        console.log ('El valor es negativo', valor);
    }else if (valor > 0){
        console.log('El valor es positivo', valor);
    }else{
        console.log( 'El valor es 0', valor);
    }

}

ingresaNumero(2);