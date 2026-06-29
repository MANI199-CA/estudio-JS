/*
*Nombre: ancho x alto
*8K 7680 x 4320
*4K 3840 X 2160
*WQHD 2560 X 1440 
*FHD 1920 X 1080
*HD 1280 X 720
*/

function nombreResolucion (ancho , alto){
    if (ancho >= 7680 && alto >= 4320){
        return '8K';

    }else if(ancho >= 3820 && alto >= 2160) {
        return '4K';
    }else if(ancho >= 2560 && alto >= 1440){
        return 'WQHD';
     }else if(ancho >= 1920 && alto >= 1080){
        return 'FHD';
    }else if(ancho >= 1280 && alto >= 720){
        return 'HD';
    }else{
        return 'resolucion incorrecta';
    }

}

let nombre = nombreResolucion (1500 , 1000);
console.log(nombre);

//resolucion primera
// function nombreResolucion (ancho , alto){
//     if (ancho >= 1280 && alto >= 720){
//         console.log('HD');
//     }else{
//         console.log('resolucion incorrecta');
//     }
// }
// resolucion semi correcta, ya que debi haber sacado de todas las resoluciones con muchos  else if y sigo
// sin ocupar RETURN Een vez de console.log

