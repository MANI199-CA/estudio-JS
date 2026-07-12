//Exepcion

// produce un error
// let myObject
// console.log(myObject.email)


// Tratamiento de errores

     //try - catch

let myObject = {}
// myObject.email = 'camachoalejandro96@gmail.com'
// let email = myObject.email;
 

try{
console.log(myObject.email)
console.log(`finaliza programa el email ${email}`)
}catch{
    console.log('hubo un error')

}

// capturar errores  usamos el parametro error dentro del metodo catch para poder usarlo y mandarlo o mostrarlo

try{
console.log(myObject.email)
console.log(`finaliza programa el email ${email}`)
}catch(error){
    console.log('hubo un error', error.message)

}


//lanzamiento de error puedo mandar de manera deliverada un error o lanzarlo de manera directa usando throw new Error()

// throw new Error('se prodrujo un error')


// function suma(a,b){
//     if (!isNaN(a) && !isNaN(b)){
//         console.log('no se puede hacer esta suma')
//     }
//     return a+b
// }

// console.log(suma('5',10))

function suma(a, b) {
    // Si "a" NO es un número O "b" NO es un número...
    if (isNaN(a) || isNaN(b)) {
        // Lanzamos un error real que detenga la ejecución
        throw new Error("Uno de los argumentos no es un número válido");
    }
    // Si todo está bien, hace la suma matemática limpia
    return Number(a) + Number(b); 
}

try {
    // Intentamos hacer una suma peligrosa pasando un texto que no es número
    console.log(suma(2, 10)); 
} catch (error) {
    // El catch atrapa el throw de arriba y evita que muera el programa
    console.log("Hubo un error en la operación: " + error.message);
}


function sumInteger(a,d){
    if (!Number.isInteger(a) || !Number.isInteger(d)){
        console.log('hola')
    }
    return a+d
}

console.log(sumInteger(2,2))
console.log(sumInteger(2,'2'))

// IsNaN ('5' cualquier numero que este en comillas js no lo considera NaN aun que sea texto)
console.log('isNaN')
console.log(isNaN('5'))
console.log(isNaN('hola'))
console.log(isNaN(5))


//
console.log('isFinite')
console.log(isFinite('5'))
console.log(isFinite('hola'))
console.log(Number.isFinite(5))

// //
console.log('isInteger')
console.log(Number.isInteger('5'))
console.log(Number.isInteger('hola'))
console.log(Number.isInteger(5))
console.log(Number.isInteger(5.5))


