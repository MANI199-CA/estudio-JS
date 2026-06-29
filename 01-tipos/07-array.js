/*los array se usa let variable [ ] */

let animalesDeCasa = ['perros' , 'gatos'];
console.log(animalesDeCasa);

/*para llamar a consola un dato especifico del array se debe poner 
console.log(la variable[y aqui el numero del indice 0, 1 o 2 
dependiento el numero que tenga el dato que necesitamos imprimir])
*/
console.log(animalesDeCasa[1]);

/*si quiero agragar un dato nuevo al array debo poner el nombre de la 
variable[aqui agragar el numero seguiente al indice por ejemplo si el array solo 
tiene del 0-1 pues el siguiente numero seria 2] = 'zariguiellas'; */

animalesDeCasa[2] = 'zariguellas';

/*los array en javascript se comportan como objects*/

/*para saber la cantidad de elementos que hay en un array se usa
console.log(variable.length) */

console.log(animalesDeCasa.length);
console.log(animalesDeCasa);