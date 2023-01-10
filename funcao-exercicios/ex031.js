function verificarValoresNegativos (vetorNumerico) {
    let valoresnegativos = 0
    for(let i = 0; i < vetorNumerico.length; i++){
        if (vetorNumerico[i] < 0) {
            valoresnegativos++
        }
    }
    console.log(`No vetor há um total de ${valoresnegativos} valores negativos`)
}

vetor = [1, -3, -6, 2, 3, 4, 5, 6, 7, 8, 9, 10, -2] 
verificarValoresNegativos(vetor)