function intervaloEntre10E20 (vetorNumeros) {
    numerosDentroDoIntervalo = 0
    numerosForaDoIntervalo = 0
    for (let i= 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] <= 20 && vetorNumeros[i] >=10){
            numerosDentroDoIntervalo++
        } else {
            numerosForaDoIntervalo++
        }
    }
    console.log(`Há ${numerosDentroDoIntervalo} numeros dentro do intervalo de 10 e 20 e há ${numerosForaDoIntervalo} Numeros fora deste intervalo`)
}

vetor = [1, 4, 8,10, 13, 17, 19, 20, 57, 23, 56, 34]
intervaloEntre10E20(vetor)