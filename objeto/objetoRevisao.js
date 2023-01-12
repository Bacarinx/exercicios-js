// coleção dinamica de pares chave/valor

//podemos adicionar atributos a um objeto pela forma genérica:
const produto = new Object 
produto.nome = 'Cadeira'
produto.marca = 'Genérica'
produto.preco = 200

console.log (produto) //{ nome: 'Cadeira', marca: 'Genérica', preco: 200 }

// podemos posteriormente deletar esses produtos com o DELETE:

delete produto.preco
delete produto.marca
console.log(produto) // { nome: 'Cadeira' }

//criando objeto de outra forma --> apartir de uma constante:
const carro = {
    modelo: 'A4',
    valor: 50000,
    proprietario: {
        nome: "raul",
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 20
    }],
    calcularValorSeguro : function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000 //podemos adicionar ou trocar algum valor pelo notação ponto
console.log(carro)

// Podemos tambem deleter esses valores pela notacao ponto
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log (carro)
console.log(carro.proprietario) //podemos acessar direto um atributo do objeto carro dessa forma


