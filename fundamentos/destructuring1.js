// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 10,
    endereco: {
        logradouro: 'rua da felicidade',
        numero: 100
    }
}

const { nome, idade } = pessoa//abstraindo as valores nome e idade etransformando em variaveis
console.log(nome, idade)

const {nome: n, idade:i} = pessoa //nomeando os valores de nome e idade e colocando em variaveis n e i
console.log (n, i)

const {endereco: {logradouro: lograd, numero: num}} = pessoa
console.log (lograd, num)