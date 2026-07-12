// 1. cre un array que almacene cinco animales
 let animales = [ 'perro', 'gato', 'leon', 'tigre', 'lobo' ];
 console.log(animales)

 //2. añade dos mas. Uno al principio y otro al final

 animales.unshift('jirafa')
 animales.push('mono');

 console.log(animales)

 // 3. elimina el que se encuentra en la tercera posicion

 animales.splice(2,1); /*splice elimina del array elementos en concreto pero sobre el mismo array 
                        (2,1) en los parametros notamos que el 2 es el indice 2 empezara aborrar desde ahi
                        y el segundo parametro 1 es cuantos indeces mas borrara es decir q en este caso solo 
                        borra el 2, si yo colocara (2,3) borraria del dos al 4, indice 2, indice 3, indice 4, 
                        apartir del 2 cuenta la cantidad del segundo parametro*/
 console.log(animales)

 let camionAnimales = animales.slice(1,3) 
 let nuevoArray = animales.slice(0,4)
 /* slice crea un array nuevo con los valores indicados en los parametros, en este caso (1,3)
 toma en cuenta desde el indice 1 hasta el 3 sin embargo el ultimo indice en este caso el 3
 no lo toma en cuenta, es decir si quiero guardar en el nuevo array el indice 1,2 se usa (1,3)
 si dentro de mi array nuevo quiero que se tome en cuantea el valor 3 pues se debe usar (1,4)*/

 console.log(camionAnimales);
console.log(nuevoArray)
 //4. creaun set que almacene cinco libros
 let libros = new Set ();
 libros.add('padre rico, padre pobre')
 libros.add('habitos atomicos')           
 libros.add( 'como influir en las personas')           
 libros.add('los cuadrantes del flujo de efectivo')           
 libros.add('el arte que te valga madre')           
console.log(libros)
 //5.añade dos mas. UNo de ellos repetido
 libros.add('padre rico, padre pobre')
 libros.add( 'la biblia')
 console.log(libros)
 //6.elimina uno en concreto
 libros.delete('padre rico, padre pobre')
 console.log(libros)
 // 7. crea un mapa que asocie el numero del mes a su nombre
 let mapMeses = new Map([
    ['enero', 1],
    ['febrero',2],
    ['marzo',3]
    ]
 )

 console.log(mapMeses)
 //8.comprueba si el mes numero 5 existe en el map e imprime el valor
 console.log(mapMeses.has('mayo'))
 //9. añade al mapa una clave con un array que almacene los meses de verano
 mapMeses.set('meses verano', ['junio', 'julio'])
 console.log(mapMeses)
 //10. crea un array, transfrmaleo a un set y almacenalo en un array
 let newArray = [ 'enero', 'febrero', 'mayo', ' enero'];

 let mySett= new Set(newArray);

 let arrayAlmacen = []

 arrayAlmacen.push(mySett);

 console.log(arrayAlmacen)