const notas = [7.5, 8.5, 4.6, 9.4, 6.2, 9.0]

//sem callBack
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log (notasBaixas)

//com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

//callback com arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log (notasBaixas3)