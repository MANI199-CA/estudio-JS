//console

console.log('hola mani')

// error

console.error('este es un mensaje de error')
console.error('este es un mensaje de error', new Error('conexion fallida'))

//warn 

console.warn('este es un mensaje de advertencia')

// info

console.info('este es un mensaje de informacion adicional')

//table


let data = [
    ['nita', 2],
    ['mancha', 2]
]
console.table(data)

data= [
    {name:'gordo',age: 9},
    {name: 'samantha', age:15}
]

console.table(data

)

// group (necesita un group de inicio y un groupEnd para cerrar las etiquetas)
console.group('usuario')
console.log('name','mani')
console.log('age', 26)
console.groupEnd()

console.log('hola')

//time 

// console.time('tiempo de ejecucion')

// for (i=0; i < 10000; i++){
    
// }


// console.timeEnd('tiempo de ejecucion1')


// assert

let age = 18

console.assert(age > 20, ' es menor') // debe recibir condicion y u mensaje

//count

console.count('click')
console.count('click')
console.count('click')
console.count('click')
console.countReset('click')
console.count('click')

// trace (stackTace) pila de acciones que se fueron haciendo desde la mas reciente a la mas antigua

function funA (){
    funB()


}

function funB(){
    console.trace('seguimiento de procesos')
}

funA()

//clear

// console.clear() //borra todo lo que se veia en consola