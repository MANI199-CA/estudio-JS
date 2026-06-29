//Calcula el factorial de un número (ejemplo: 5! = 5×4×3×2×1)

function calcularFactorial(n){
    let valor = 1;
    for (i = 1; i <= n; i++){
      valor *= i

}
    console.log(valor);
}

calcularFactorial(5);