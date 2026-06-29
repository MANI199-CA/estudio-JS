// para las funciones constructoras simplemente hay que crear una funcion pero agregar 
// el nombre como lo que queremos crear o recurso que quiero que cree y el nombre unica con Uppercamelcase 
// o Pascalcase por convencion  si el nombre lleva varias palabras todas inican con mayus


// {id: 2, fncion recuoerar clave} palabra reservada this
// para usar this, agragamos dentro de la funcion constructira this seguido de la propiedad que agregaremos
// this.id = x ;
function Usurio(){
    this.id = 2;
    this.recuperarClave = function(){ // cuando usamos funciones dentro de factory o constructor se llamaran METODOS ya no funciones
        console.log('Recuperando clave');
    };

}

// para asignar como valor a una variable la funcion constructora no basta con asignar el valor como en el ejemplo}
// ya que esta me arrojara Undefined

//let user = Usurio(); para que no asigne usamos la palabra reservada new

let user = new Usurio();
console.log(user);


//                                             |  se crea un objeto literal de la nada {}
//cuando se usa la palabra new suceden 4 cosas |  se vincula el prototipo de la funcion con el objeto
//                                             |  el objeto de la nada se le asigna a this= {}
//                                             |  si no retorna nada se retorna automaticamente this

