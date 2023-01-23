const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

exibirConteudo(caminho)
    .then(conteudo => conteudo.toUpperCase())
    .then(console.log)

    