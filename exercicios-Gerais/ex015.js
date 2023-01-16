function receberSomentePares (array) {
    const apenasPares = (valor, index) => valor % 2 == 0 && index % 2 == 0
    console.log(array.filter(apenasPares))
}
const numeros = [10, 70, 22, 44, 55, 56, 68, 70]
receberSomentePares (numeros)