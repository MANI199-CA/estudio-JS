//for of nos sirve para iterar los elementos de un array 
// se compone de for(let nombreDeCadaElemento of nombreDelArray){se ejecuta el codigo}

let toppings =  ['almendra', 'lunetas', 'chispas de chocolate', 'nuez'];

for(let extra of toppings){
    console.log(extra);
};

//para iterarr los elementos de un array con el loop while 

let i = 0;

while(i < toppings.length){
    console.log(toppings[i]);
    i++;
}