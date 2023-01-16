function somarNumeros (array) {
    const soma = (acc, cur) => acc += cur
    console.log(array.reduce(soma))
}
somarNumeros([10, 20, 30])