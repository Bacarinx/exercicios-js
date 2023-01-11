function trocarValores (vetor1, vetor2) {
    for ( let i = 0; i < vetor1.length; i++) {
        vetor1[i] = vetor1[i] + vetor2[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] = vetor1[i] - vetor2[i]
    }
    console.log(`Vetor Inteiro: ${vetorInteiro}`)
    console.log(`Vetor Decimal: ${vetorDecimal}`)
}

vetorInteiro = [1, 2, 3, 4, 5]
vetorDecimal = [1.1, 2.2, 3.3, 4.4, 5.5]

trocarValores(vetorInteiro, vetorDecimal)

