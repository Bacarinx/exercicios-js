function funcaoDaSorte (numero) {
    const sorte = Math.floor(Math.random() * 10)
    if (numero == sorte) {
        console.log(`Parabéns! O numero sorteado foi o ${numero}`)
    } else {
        console.log(`Que pena! O numero sorteado foi o ${sorte}`)
    }
}
funcaoDaSorte(6)