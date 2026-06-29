//convierte temperatura celsius a fahrenheit y a la inversa




// //function fahrenheitCelsius (celsius){
//     return (celsius * 1.8)+32
// }

//let gradosFahrenheit = fahrenheitCelsius(20);

//console.log(gradosFahrenheit + '' + '°F');

function f_C (grados, valor){
    if(grados === 'celsius'){
        return (valor * 1.8)+32 + ' ' + '°C'
        
    }else{
        return (valor - 32)*0.555 + ' ' + '°F'
    }
}

let conversion = f_C('celsius',20);

console.log(conversion);