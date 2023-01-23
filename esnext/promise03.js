function gerarNumerosEntre(min, max) {
    if (min > max) { // trocar valores min e max
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max- min + 1)) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10, 30)
    .then(num => `O numero gerado foi ${num}`)
    .then(console.log)