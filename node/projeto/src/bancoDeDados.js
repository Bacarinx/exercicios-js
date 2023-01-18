const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}
function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id //caso o produto não tenha id, adiciona o id da sequencia
    produtos[produto.id] = produto //após o produto ter id, recebe o valor do produto
    return produto
}

function getProduto(id) {
   return produtos[id] || {} //adiciona o produto a partir do seu id
}

function getProdutos() {
    return Object.values(produtos) //exibe todos os produtos contidos na lista de objetos "produtos"
}

module.exports = { salvarProduto, getProduto, getProdutos } //deixando publico as 3 funções