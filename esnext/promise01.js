let p = new Promise((resolve, reject) => {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

function primeiroElemtento(array) {
    return array[0]
}

p
    .then(primeiroElemtento)
    .then(primeiro => primeiro[0])
    .then(console.log) //Na hora de imprimir o resultado do da concatdo then, basta colocar 'Console.log' dentro do then