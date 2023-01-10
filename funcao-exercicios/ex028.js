function lerNumerosPares (vetorNumeros) {
    let numerosImpares = 0
    let numerosPares = 0
    for (let i = 0; i < vetorNumeros.length; i++ ){
        if (vetorNumeros[i] % 2 == 0) {
            numerosPares++
        } else {
            numerosImpares++
        }
    }
    console.log(`Neste vetor há ${numerosPares} numeros pares e ${numerosImpares} numeros impares`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
lerNumerosPares(vetor)
