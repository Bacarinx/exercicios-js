function funcao1(vetorNumerico, valor){
    vetorFinal = []
    for (let i = 0; i < vetorNumerico.length; i++){
        vetorFinal[i] = vetorNumerico[i] * valor 
    }
    console.log(vetorFinal)
}

function funcao2(vetorNumerico, valor){
    vetorFinal = []
    if (valor >5){
        for (let i = 0; i < vetorNumerico.length; i++) {
            vetorFinal[i] = vetorNumerico[i] * valor
        }
    }
    console.log(vetorFinal)
}
vetornumero = [1, 2, 3, 4, 5]

funcao1(vetornumero, 5)
funcao2(vetornumero, 6)
