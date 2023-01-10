function mediaPonderada(codigo, nota1, nota2, nota3) {
    if (nota1 > nota2 && nota1 > nota3) {
        notaFinal = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3)
        if(notaFinal >= 5){
            console.log(`Aluno código: ${codigo} aprovado com nota: ${notaFinal}`)
        } else {
            console.log(`Aluno código: ${codigo} reprovado com nota: ${notaFinal}`)
        }

    } else if (nota2 > nota1 && nota2 > nota3) {
        notaFinal = (nota2 * 0.4) + (nota1 * 0.3) + (nota3 * 0.3)
        if(notaFinal >= 5){
            console.log(`Aluno código: ${codigo} aprovado com nota: ${notaFinal}`)
        } else {
            console.log(`Aluno código: ${codigo} reprovado com nota: ${notaFinal}`)
        }

    } else if (nota3 > nota1 && nota3 > nota2) {
        notaFinal = (nota3 * 0.4) + (nota1 * 0.3) + (nota2 * 0.3)
        if(notaFinal >= 5){
            console.log(`Aluno código: ${codigo} aprovado com nota: ${notaFinal}`)
        } else {
            console.log(`Aluno código: ${codigo} reprovado com nota: ${notaFinal}`)
        }
    } else if (nota1 == nota2 && nota2 == nota3) {
        notaFinal = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3)
        if(notaFinal >= 5){
            console.log(`Aluno código: ${codigo} aprovado com nota: ${notaFinal}`)
        } else {
            console.log(`Aluno código: ${codigo} reprovado com nota: ${notaFinal}`)
        }
    } else if (nota1 == nota2 && nota2 > nota3) {
        notaFinal = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3)
        if(notaFinal >= 5){
            console.log(`Aluno código: ${codigo} aprovado com nota: ${notaFinal}`)
        } else {
            console.log(`Aluno código: ${codigo} reprovado com nota: ${notaFinal}`)
        }
    } else if (nota1 == nota3 && nota2 < nota3) {
        notaFinal = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3)
        if(notaFinal >= 5){
            console.log(`Aluno código: ${codigo} aprovado com nota: ${notaFinal}`)
        } else {
            console.log(`Aluno código: ${codigo} reprovado com nota: ${notaFinal}`)
        }
    } else if (nota1 < nota3 && nota2 == nota3) {
        notaFinal = (nota1 * 0.3) + (nota2 * 0.4) + (nota3 * 0.3)
        if(notaFinal >= 5){
            console.log(`Aluno código: ${codigo} aprovado com nota: ${notaFinal}`)
        } else {
            console.log(`Aluno código: ${codigo} reprovado com nota: ${notaFinal}`)
        }
    }
}

mediaPonderada(1, 10, 10, 9)