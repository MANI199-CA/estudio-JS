//Determina si un año es bisiesto (múltiplo de 4, pero no de 100 salvo que sea múltiplo de 400).
// regla para años bisiestos si el modulo del año entre 4 es igual a 0 es bisiesto
// regla para años bisiestos si el modulo del año entre 4 es igual a 0 y el modulo del año entre 100 es 0 no es bisiesto
// pero si el modulo del año entre 4,100,400 es igual a 0 es bisiesto

function añoBisiesto(año){
    
    if( (año % 4 === 0 & año % 100 !== 0) || año % 400 === 0){
    console.log(año, 'es un año bisiesto');
    
    }else {
    console.log(año, 'no es un año bisiesto');
    }


}

añoBisiesto(1900);

let años = 2000;
console.log(años % 400);
console.log(años % 100);
console.log(años % 4 );
//if(año % 4 === 0 & año % 100 === 0)