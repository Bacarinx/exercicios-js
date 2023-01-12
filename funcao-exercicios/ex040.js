function mostrarConceitoDeNotas (vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 5) {
            console.log(`Nota:${vetor[i]} -->  D`)
        
        } else if (vetor[i] >= 5 && vetor[i] < 7){
            console.log(`Nota:${vetor[i]} -->  C`)
            
        } else if (vetor[i] >= 7 && vetor[i] < 9){
            console.log(`Nota:${vetor[i]} -->  B`)
                
        } else if (vetor[i] >= 9 && vetor[i] <= 10) {
            console.log(`Nota:${vetor[i]} -->  A`)
        } else {
            console.log("Nota inválida!!")
        }
    }
}

vetorNotas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
mostrarConceitoDeNotas(vetorNotas)