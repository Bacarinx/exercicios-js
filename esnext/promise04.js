function gerarNumerosEntre(min, max, tempo) {
    if (min > max) { // trocar valores min e max
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max- min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros () {
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 700),
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 2500)
    ])
}
gerarVariosNumeros()
    .then(console.log)