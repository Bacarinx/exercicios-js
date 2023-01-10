//criar instancia de objetos dessa maneira não é correta

const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 32
}
//----------------------------------------------------------------//

//podemos criar uma function Factory para melhorar esse processo: 

function criarprod() {
    return {
        nome: 'chocolate',
        preco: 9
    }
}

console.log(criarprod())

