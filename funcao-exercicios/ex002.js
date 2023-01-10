function triangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado1 === lado3 && lado2 ===lado3){
        console.log(`trinagulo Equilátero`)
    } else if (lado1 === lado2 && lado1 !== lado3 && lado2 !== lado3){
        console.log(`triangulo Isóceles`)
    } else if (lado1 === lado3 && lado1 !== lado2 && lado3 !== lado2){
        console.log(`triangulo Isóceles`)
    } else if (lado2 === lado3 && lado2 !== lado1 && lado3 !== lado1){
        console.log(`triangulo Isóceles`)
    } else if (lado1 !== lado2 && lado1 !==lado3 && lado2!== lado3) {
        console.log(`triangulo Escaleno`)
    }
}

triangulo(1, 1, 1)
triangulo(2, 2, 1)
triangulo(2, 1, 2)
triangulo(1, 2, 2)
triangulo(1, 2, 3)
