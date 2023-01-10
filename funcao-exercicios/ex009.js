function calcularNota (nota) {
    let notaCorrigida = arredondarNota(nota)
    if (notaCorrigida < 40){
        console.log(`Aluno reprovado com nota ${notaCorrigida}`)
    } else {
        console.log(`Aluno Aprovado com nota ${notaCorrigida}`)
    }
}

function arredondarNota (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

calcularNota(15)
calcularNota(58)
calcularNota(56)
