function JuncaoDeVetores(vetor1, vetor2) {
    vetor1.push(vetor2)
    console.log(vetor1)
}

vetorPilhas = [1, 2, 3, 4, 5]
vetorAdiciona = [6, 7, 8, 9, 10]

JuncaoDeVetores(vetorPilhas, vetorAdiciona)
