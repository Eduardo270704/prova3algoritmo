function area(l){
    A=((l**2)*(Math.sqrt(3)))/4
    A*=100
    A=Math.round(A)
    A=parseInt(A)
    A/=100
    return A
}

console.log("Área de um triângulo equilátero de lado 6:", area(6));
console.log("Área de um triângulo equilátero de lado 8:", area(8));