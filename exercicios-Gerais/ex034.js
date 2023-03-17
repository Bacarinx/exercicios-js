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
// Rest operator 

// quando eu utilizo o operador rest ..., o valor retornado será o restando do objeto/array que está no "resto" dele, ou seja, toda a informação restante, tirando o "name" neste caso

const { name, ...rest } = user; //desestruturando e rest

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]; //array padrão

const ultimo = numbers[9] //forma padrão 

const [first, second, ...resto] = numbers;


document.body.innerText = JSON.stringify({first, second, resto})




