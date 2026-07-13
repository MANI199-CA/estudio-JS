//1- Crea una clase que reciba dos propiedades
class User {
    constructor(name, age){
        this.name = name;
        this.age=age;

    }

    saludar(){
        console.log(`${this.name} saluda`)
    }

    static metodoStatico(){
        console.log('metodo estatico 2')
    }
}
//2- Añade un método a la clase que utilice las propiedades
User.prototype.programar = function(){console.log(`${this.name} esta programando`)} // si por alguna razon queremos agregar un metodo a una clase de forma tardia usamos prototype

let maniUser = new User('mani', 26)

maniUser.programar()
maniUser.saludar()

console.log(maniUser)
//3-Muestra los valores de las propiedades e invoca a la funcion
console.log(maniUser.name)
console.log(maniUser.age)
//4- Añade un método estático a la primera clase
User.miMetodoStatic = function(){console.log('metodo estatico 1')}


//5- Haz uso del método estatico
User.miMetodoStatic();
User.metodoStatico();
//6- Crea una clase que haga uso de herencia
class Person extends User{
    constructor(name, age, ocupation){
        super(name, age )
        this.ocupation = ocupation;
    }
}
//7- crea una clase que haga uso de getters y setters 
class NewClass {
    #valor
    constructor(valor, tipoValor){
        this.#valor = valor
        this.tipoValor = tipoValor
    }

    get mostrarValor (){
        return this.tipoValor
    }

    get mvalor(){
        return this.#valor
    }

    set modificarValor(valor){
        this.#valor = valor;

    }
}

let N = new NewClass(222, 'number')

N.modificarValor = 245
N.mvalor


// console.log(N.valor)
console.log(N.tipoValor)


//8- Modifica la clase con getters y setters para que propiedades privadas

//9-Utiliza los gets y sets y muestra sus valores

N.modificarValor = 245
N.mvalor

//10-Sobrescribe un método de un clase que utilice herencia

class Admin extends User{
    constructor(name, age, rol){
        super(name,age)
        this.rol = rol
    }
    
    programar(){
        super.programar()
        console.log(`${this.rol} is active`)
    }
}

let maniAdmin = new Admin('mani',26,'Programador Administrador');

maniAdmin.programar()