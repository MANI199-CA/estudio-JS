//Usa el operador ternario para comprobar si una contraseña es correcta ("1234") o no.
 
// let contraseña = 12345;

// let ingreso = contraseña == 1234 ? 'contraseña correcta' : 'contraseña incorrecta';

// console.log(ingreso);

function ingresoContra (pass){
    let ingreso = pass == 1234 ? 'contraseña correcta' : 'contraseña incorrecta';

    console.log(ingreso);

    
}

ingresoContra(1234);

// para que el ternario funcione debo usar operadores de comparacion en este caso la 
// variable ingreso es igual a corecta o incorrecta si la condicion se cumple que es que pass sea igual a 1234 