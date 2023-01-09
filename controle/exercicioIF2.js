const imprimirMedia = function (nota1, nota2) {
    let media = (nota1 + nota2) / 2
    if (media == 10) {
        console.log ('Aprovado com Distinção')
    } else if (media <10 && media >=7) {
        console.log ('Aprovado')
    } else if (media <7 && media >= 0){
        console.log ('Reprovado')
    } else {
        console.log ('Nota inválida')
    }
}
imprimirMedia (10, 10)
imprimirMedia (7, 7)
imprimirMedia (6, 6)
imprimirMedia (11, 11)