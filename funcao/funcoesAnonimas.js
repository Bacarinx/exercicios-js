const soma = function (x, y) { //criando uma função de soma
    return x + y
}

const subt = function (x, y) { //criando uma função de subtração
    return x - y
}

const imprimirResultado = function (a, b, operacao = soma) { //criando uma função anonima e colocando ela numa const
    console.log (operacao(a, b))
}

imprimirResultado (3, 4) // valor da operação recebe soma por padrão
imprimirResultado (3, 4, soma)
imprimirResultado (3, 4, subt) //valor da operação pre-setado pra função de subtração
imprimirResultado (3, 4, function (x, y) { //criando uma função anonima sem a necessidade de criar uma função prévia
    return x - y
})
imprimirResultado (3, 4, (x, y) => x * y) //mesma coisa que o de cima, porém com uma arrow function

const pessoa = {
    falar: function () { //criando uma função anonima dentro de um objeto
        console.log ('opa')
    }
}
pessoa.falar()