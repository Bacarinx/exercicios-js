function despesasTotais (array) {
    const soma = array.reduce(function(acc, cur){
        return acc + cur.preco
    }, 0)
    console.log(`R$${soma.toFixed(2)}`)
}

despesasTotais([
    {nome: 'Chocolate', preco: 15.99},
    {nome: 'notebook', preco: 2199.99}]
)