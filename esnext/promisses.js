function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!!')
    .then (frase =>  frase.concat(' depois da frase')) 
    .then (frase => console.log(frase))
    .catch (e => console.log(e))