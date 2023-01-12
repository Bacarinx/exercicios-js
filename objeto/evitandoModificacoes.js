//Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

produto.nome = 'Borracha'
produto.descricao = "borracha branca escolar"
delete produto.tag
console.log(produto)

// Object.seal (selar)
const pessoa = {nome: 'Juliana', idade: 30}
Object.seal(pessoa)
