function area (largura, altura) {
    const area = altura * largura
    if (area > 20) {
        console.log (`valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log (area(2, 2))
console.log (area(2))
console.log (area())
console.log (area(2, 3, 5, 2))
console.log (area(4, 6))