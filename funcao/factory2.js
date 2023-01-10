function criarProd(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1
    }
 }

 console.log(criarProd('chocolate', 10))
 console.log(criarProd('carro', 50000))

