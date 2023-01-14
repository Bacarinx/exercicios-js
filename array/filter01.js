const produtos = [
    { nome: 'notebook', preco: 2500, fragil: true},
    { nome: 'Ipad', preco: 3500, fragil: true},
    { nome: 'Copo de vidro', preco: 10, fragil: true},
    { nome: 'Copo de plastico', preco: 8, fragil: false},
]

const precoALto = produto => produto.preco > 500
const fragil = produto => produto.fragil == true

console.log(produtos.filter(precoALto).filter(fragil))
