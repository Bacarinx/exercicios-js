function receberPrimeiroEUltimoElemtento (array) {
    novoArray = []
    novoArray.push(array.shift(), array.pop())
    console.log(novoArray)
}
const numeros = [1, 2, 3, 4, 5]
receberPrimeiroEUltimoElemtento (numeros)