const porta = 3003

const express = require('express') //chamando o express
const app = express() //adicionando o express na const app

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.99}) // O metodo Send vai converter o Objeto para JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})