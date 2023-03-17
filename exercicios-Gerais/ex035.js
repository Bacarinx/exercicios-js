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

// Optional Chaining ->

const use = {
    name: "Diego",
    idade: 18,
    nickname: "Bacarin",
    address: {
        street: "Rua Raphael",
        number: 133,
        zip: {
            code: '89160000',
            city: "Rio do sul"
        },
        showFullAddress() {
            return 'Ok';
        }
    }
}

//o optional chaining é usado quando não sabemos se alguma informação em um objeto pode existir, então se ele não conseguir acessar alguma informação ele ja para e não tenta prosseguir com o resto

//sua sintaxe é utilizar um "?" depois da informaão que desejar, 
//ex: Não sei se vai haver um address, logo utilizo address?. ...rest

//emendamos tambem o operador Nullish Coalecing para tomar uma decisão caso essa informação não exista.
document.body.innerText = use.address?.zip?.code ?? 'Não informado'

//utilizando o chaining com funções em objetos: 
document.body.innerText = use.address?.showFullAddress?.() ?? "Função não existe"
//neste caso, colocamos um (?.) antes da chamada da função, caso ela não exista podemos definir um valor padrão com (??)

const key = 'name';

document.body.innerText = use[key]
