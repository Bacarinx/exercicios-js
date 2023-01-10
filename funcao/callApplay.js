function getPreco(imposto = 0, moeda = 'R$') {
    return `${this.nome}: ${moeda}${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4500,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

//metodo apply e call
const carro = {
    nome: 'carro',
    preco: 50000,
    desc: 0.1
}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) //metodo call
console.log(getPreco.apply(carro, [0.17, '$'])) //metodo apply -> precisa de um array para os atributos