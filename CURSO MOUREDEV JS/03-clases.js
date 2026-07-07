/* clases/ usamos  class para crear objetos de una manera mas automatica funciona como un molde
*/

class Animal{
    constructor(name, lugar, alimentacion, sonido){/* la funcion constructor() recibe los parametros y los parametros por convencion se deben nombrar
        igual a la nimbre de las propiedades del objetos o las keys */ 
        /*usamos this para llamar o crear las propiedades del objetos*/
        this.name = name;
        this.lugar= lugar;
        this.alimentacion = alimentacion;
        this.sonido = sonido;
        
    }
    
    animalSuena(){
        console.log(`el ${this.name} ${this.sonido}`)
    }
}


// para poder usar el molde y crear variables usamos la palabra reservada new seguido del la clase
let animal = new Animal('leon', 'africa', 'carnivoro','ruge');

animal.animalSuena()

console.log(animal)

// clases con funciones

class Person{
    constructor(name, age, alias){
        this.name = name;
        this.age = age;
        this.alias = alias
    }

    walk(){
        console.log('LA PERSONA CAMINA')
    }
}

let person1 = new Person('manuel', 26, 'mani');

console.log(person1);

person1.walk();

/* yo puedo modificar los valores de las propiedades como en un objeto comun y corriente*/

person1.age = 27;
//tambien  se puede usar esta sintaxis person1['age'] = 27

console.log(person1);

/*propiedades privadas*/

class PrivatePerson {
    #bank /* usamos # para volver una propiedad privada de esta forma no pueden aceder a ella esto si es una propiedad 
             con datos sensibles como en este caso que es el numero de cuenta de banco, IMPORTANTE!! se debe poner fuera del
             constructor #propiedadPrivada seguido del nombre de la propiedad que queremos que sea privada y dentro del constructor usar igual # 
             en el this.#propiedadPrivada, si queremos usar la propiedad en algun mtodo dentro de la clase de igual modo debemos usar 
             this.#nombrePropiedadPrivada*/
    constructor(name, age, alias,bank){
        this.name = name;
        this.age = age;
        this.alias = alias;
        this.#bank = bank;
    }

    pay(){
        this.#bank
    }
}

let person2 = new PrivatePerson('mani', 26, 'manu', 4152171732345667)

console.log(person2)

console.log(person2.bank) // si quiero acceder o mostrar el valor de la propiedad no sale pero si existe, tampoco la podemos modificar

/* usando # no podemos ni acceder ni modificar la propiedad que volvimos privada
pero si hay forma de que se pueda o acceder pero no modificar o modificar pero no acceder a la propiedad

si quiero que alguna propiedad se pueda visualizar aunque sea privada en primera instancia debo usar o crear metodo 
get propiedad(){retornar la propiedad que quiero visualizar}  con get() damos permiso de leer mas no de modificar

ahora bien si yo quiero modificar pero no visualizar una propiedad usamos el metodo set() uando la misma sintaxis*/
class GetPerson {
    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank){
        this.#name = name;
        this.#age = age;
        this.#alias = alias;
        this.#bank = bank;
        
    }

    get name(){
        return this.#name
        
    }
    get bank(){ // importante que el nombre de la funcion debe ser igual al nombre de la propiedad que queremos ver
        return this.#bank 
    }

    set bank(bank){
        this.#bank = bank  // aqui reasignamos el valor de bank con el nuevo parametro
    }
}

let person3= new GetPerson('manuel', 26, 'mani', 1223333334444)

console.log(person3.bank)
console.log(person3)

person3.bank = 1222222; // aqui reasignamos el valor de van use un get solo para poder visualizar si se hizo el cambio 
console.log(person3.bank)



/*HERENCIA
usamos extends para heredar propiedades y metodos de otra clase*/

class Dog extends Animal{

constructor(name, lugar, alimentacion, sonido, color) {
        // 2. ¡REGLA DE ORO! Primero llamamos al padre y le pasamos lo que nos pide
        super(name, lugar, alimentacion, sonido);
        this.color= color;

    }
    accion(){
        console.log(`el ${this.name} corre`)
    }
}

let nuevoPerro = new Dog('nita', 'caucel', 'omnivora', 'ladra', 'cafe');

console.log(nuevoPerro);

nuevoPerro.animalSuena();
nuevoPerro.accion();