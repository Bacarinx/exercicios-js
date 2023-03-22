const user = {
    name: "Diego",
    idade: 18,
    nickname: "Bacarin",
    address: {
        street: "Rua Raphael",
        number: 133
    }
}

document.body.innerText = ('name' in user) //verificando se a chave está no objeto

document.body.innerText = Object.keys(user) //obtendo todas as chaves do objeto

document.body.innerText = Object.values(user) //obtendo todos os valores do objeto

document.body.innerText = JSON.stringify(Object.values(user)) //visualização de uma manerira mais agradavel dos valores do objeto

document.body.innerText = JSON.stringify(Object.entries(user)) //dessa maneira são passadas as chaves e os valores do objeto

//------------------------------------------------------------//
//desestruturação -> removendo parte de um objeto para uma variavel a parte:

const address = user.address
document.body.innerText = JSON.stringify(address) //forma padrão mais antiga se separar um entrie em uma variavel

//quando nomearmos uma variavel com o mesmo nome da chave do objeto, podemos utilizar a seguinte sintaxe que o comportamento vai permanecer o mesmo:
const { idade: age, nickname = "fernandes"} = user
document.body.innerText = JSON.stringify({age, nickname}) //fiz a mesma coisa quando peguei o endereço do objeto.

function mostraIdade({idade, nickname = "baca"}) {
    return idade + " " + nickname
}

document.body.innerText = mostraIdade(user)

//-------------------------------------------------------------------//





