// sirve para iterar los propiedades de un object
//puede servir cuando no se conosca las propiedades de dicho objeto


let chirris12 ={
    cantidad: 12,
    toppings:2,
    aderezos: 1,
    fruta:1,
    extras: 'nutella',
};

for(let prop in chirris12){
    console.log(prop, '' , chirris12[prop]); // AQUI ESTOY IMPRIMIENDO EL NOMBRE DE LA PROPIEDAD, ESPACIO, CHIRRIS12[PROP] VALOR DE LA PROP

};


// antes for in se usaba para iterar un array sin embargo ya no se usa asi pero si 
// se revisa codigo antiguo puedo encontrar asi
let toppings =  ['almendra', 'lunetas', 'chispas de chocolate', 'nuez'];

for(let toppinExtra in toppings){
    console.log(toppinExtra, '', toppings[toppinExtra]);
}