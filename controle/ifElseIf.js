Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirNota = function (nota){
    if (nota.entre (9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre (6, 8.99)) {
        console.log ('Aprovado')
    } else if (nota.entre(0, 5.99)) {
        console.log ('Reprovado')
    } else {
        console.log ('Valor inválido')
    }
    console.log ("final")
}

imprimirNota (9)
imprimirNota (8)
imprimirNota (5)
imprimirNota (11)
