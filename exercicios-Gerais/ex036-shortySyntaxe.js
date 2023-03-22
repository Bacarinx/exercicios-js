//short Syntaxe

const name = "Henrique"
const idade = 18

const user = {
    name: name,
    idade: idade,
}

//se o nome da chave do objet0 for igual o nome da var, podemos usar uma short sintaxe da seguinte maneira:

const pessoa = {
    name,
    idade,
}

document.body.innerText = JSON.stringify(pessoa)

//------------------------------------------------//

