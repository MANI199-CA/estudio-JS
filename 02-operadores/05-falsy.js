// short-circuit

// falso
//false
//0
//''
//null
//undefined
//NaN

//  || ocupo OR YA QUE ME VA A DAR RESULTADO SI O SI  
let nombre = 'mani';
let num = '';

let username = nombre || 'anonimo';
let numeroCliente = num || '(sin numero de cliente)';

console.log(username, numeroCliente);

// OCUPO && PERO AMBOS RESULTADOS TIENEN QUE SE TRUE 

function fn1(){
//    console.log('el dato fn1 es correcto');
    return false
};

function fn2(){
    //console.log('el dato fn2 es correcto');
    return true
};

console.log(fn1(), fn2());

if (fn1() === true){
    console.log('si puede pasar');
} else{
    console.log('no puede pasar');
}; if (fn2() === false) {
    console.log('no puede pasar');
    
} else {
    console.log('si puede pasar');
    
}