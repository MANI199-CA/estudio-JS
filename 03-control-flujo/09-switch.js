// switch indicar al codigo donde queremos que este se caiga
// cuando la CASE sea igual al valor de la variable se imprime el codigo siempre agragar break entre los case
//opcional agregar un DEFAULT en caso de que no se compla la condicion la cual es que el valor de la  variable
//sea igual

let accion = 'listar';
//accion = 'guardpar';

// switch(accion){
//     case 'listar':
//         console.log('accion de listar');
//         break;
//     case  'guadar':
//         console.log('accion de guardar');    
//         default:
//             console.log('accion no reconocida');
// }

//switch es como un if else

if (accion === 'listar'){
    console.log('accion de listar');
    
}else if (accion === 'guardar') {
    console.log('accion de guardar');
}else {
    
    console.log( 'accion no reconcida');
    
}





  
