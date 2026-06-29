// determina si es mayor de edad o menor de edad

function puedePasar(edad){
    if(edad >= 18){
        console.log('El usuario es mayor de edad');
    
    }else{
        console.log('El usuario es menor de edad');
    }
}


let ingreso = new puedePasar(17);
let ingreso2 = new puedePasar(18);