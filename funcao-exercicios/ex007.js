function ResolverBhaskara (ax2, bx, c) {
    let valores = [] //criando o array

    delta = Math.pow((Math.pow(bx, 2) - 4 * ax2 * c), 0.5)
    let x1 = (-bx + delta) / 2 * ax2
    let x2 = (-bx - delta) / 2 * ax2

    if (delta >= 0){
        valores.push(x1)
        valores.push(x2)
        return valores
    } else {  
        return 'Delta negativo'
    }
}
console.log(ResolverBhaskara(1, 12, -13))
console.log(ResolverBhaskara(7, 3, 4))

