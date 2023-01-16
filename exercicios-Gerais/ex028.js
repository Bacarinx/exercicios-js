function filtrarPorQnt (numeros, quantidadeDesejada) {
    return numeros.filter(numero => {
        const quantidadeDigitos = String(numero).length

        return quantidadeDigitos === quantidadeDesejada
    })
}

console.log(filtrarPorQnt([1, 45, 67, 23, 6, 765], 2))
