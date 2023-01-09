//toda função, mesmo sem atributos, pode adicionar atributos externos

//neste caso, foi criado um array que soma todos os atributos inseridos na hora de chamar a função

function soma () {
    let soma = 0
    for (i in arguments) {
        soma =+ arguments[i]
    }
    return soma
}

console.log (soma())
console.log (soma(1))
console.log (soma (1.2, 5.2, 1.8))