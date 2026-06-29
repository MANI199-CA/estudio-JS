//Crea una función que reciba un array de números y devuelva solo los pares.

let nu = [1, 2, 3, 4, 5, 6, 7, 8, 10];

function devuelvePares(ar){
    let pares = [];
    let impares = [];
    for(let i = 0; i < ar.length; i++){
        if(ar[i] % 2 === 0){
            pares.push(ar[i]);
        }else{
            impares.push(ar[i]);
        }
    }
      
        
    console.log(pares );
    console.log(impares );
}

devuelvePares(nu)

