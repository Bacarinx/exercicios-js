function progressaoAritimetica (numero, primeiroTermo, razao) {

    let soma = 0
    vetorProgressao = []
    for(let i = 0; i < numero; i++){
        vetorProgressao[i] = primeiroTermo + (i * razao)
        soma = soma + vetorProgressao[i]
    }
    console.log(vetorProgressao, soma)
}



function progressaoGeometrica(numero, primeiroTermo, razao) {
    let soma = 0
    vetorProgressao = []
    for(let i = 0; i < numero; i++){
        vetorProgressao[i] = primeiroTermo * Math.pow(razao, (i -1))
        soma = soma + vetorProgressao[i]
    }
    console.log(vetorProgressao, soma)

}

progressaoAritimetica(5, 3, 3)
progressaoGeometrica(5, 3, 3)

