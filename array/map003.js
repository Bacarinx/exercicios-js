Array.prototype.map2 = function(callback) {
    const nova = []
    for (let i = 0; i < this.length; i++) {
        nova.push(callback(this[i], i, this))
    }
    return nova
}


const carrinho = [
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

const carrinhoObj = function(json) {
    return JSON.parse(json)
}
const preco = function(e) {
    return e.preco
}

const resultado = carrinho.map2(carrinhoObj).map2(preco)
 console.log(resultado)