function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) { // trocar valores min e max
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max- min + 1)) + min

        if(numerosProibidos.includes(aleatorio)){
            reject('Numero Repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qntDeNumeros, tentativas = 1) {
    try{
        const numeros = []
        for(let _ of Array(qntDeNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if (tentativas > 100) {
            throw "Não deu certo!"
        } else {
            return gerarMegaSena(qntDeNumeros, tentativas + 1)
        }
    }
    
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)
