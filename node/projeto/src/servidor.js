const porta = 3003

const express = require('express') //chamando o express
const app = express() //adicionando o express na const app
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // O metodo Send vai converter o Objeto para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})