const imprimirResultados = function (nota) {
    switch (Math.floor(nota)) {//arredonda a nota para baixo
        case 10: //caso eu deixe o caso nulo, o script considera o caso de baixo
        case 9:
            console.log('Quadro de honra')
            break //sempre colocar o breake no final de cada case
        case 8: case 7: case 6:
            console.log ('Aprovado')
            break
        case 5: case 4:
            console.log ('Recuperação')
            break 
        case 3: case 2: case 1: case 0:
            console.log ('Reprovado')
            break
        default:
            console.log ('Valor inválido')
    }
}

imprimirResultados (10)
imprimirResultados (8)
imprimirResultados (5)
imprimirResultados (2)
imprimirResultados (-3)

