//Métodos de Array: 

const array = [1, 2, 3, 4, 5]

//Percorrendo o array em diversos metodos: 

//Método FOR OF
for ( const i of array) {
    document.body.innerText += i;
}

// -----------------------------------MAP------------------------------------------//

//Método MAP --> Sintaxe igual ao ForEach

//O map sempre irá retornar um vetor de valores ex: [0, 2, 4, 6, 8]

//Utilizamos o MAP sempre que quisermos transoformar um array em um outro e poder armazená-lo em uma variavel dentro do código

//podemos criar condicionais dentro do MAP

const novoArray = array.map(item => {
    if (item % 2 === 0) {
        return item * 10
    } else {
        return item
    }
})

document.body.innerText = JSON.stringify(novoArray) //[2, 40, 6, 80, 10]

// -----------------------------------MAP------------------------------------------//


// -----------------------------------Filter------------------------------------------//

//diferente do MAP, o filter apenas "FILTRA" os itens do array sem poder modificá-los 

//o retorno do filter, serão os resultados que serão atendidos na estrutura condicional do método

//além disso, podemos combinar o filter com o map para alterar esses valores

const newArray = array.filter(item => item % 2 === 0 ).map(item => item * 10) //somente valores pares e multiplicados por 10


document.body.innerText = JSON.stringify(newArray)

// -----------------------------------Filter------------------------------------------//


// -----------------------------------Every------------------------------------------//

//retorna um valor booleano (true or false)

//retorna true caso todos os itens sejam atendidos na estrutura de condição

//retorna false caso um item não passe sobre a condição estipulada

const todosNumeros = array.every (item => typeof item === "number")

document.body.innerText = JSON.stringify(todosNumeros)

// -----------------------------------Every------------------------------------------//


// -----------------------------------Some------------------------------------------//

//retorna um valor booleano (true or false)

//retorna true caso Algum dos itens sejam atendidos na estrutura de condição

//retorna false caso nenhum item passe sobre a condição estipulada

const AlgumImpar = array.some (item => item % 2 === 0) //verifica se há par no array

document.body.innerText = JSON.stringify(AlgumImpar)

// -----------------------------------Some------------------------------------------//


// -----------------------------------Find------------------------------------------//

//O Find Serve para encontrar um item do arrray

// o retorno do find, será o PRIMEIRO VALOR QUE SATISFAÇA A CONDIÇÃO

//Caso não haja NENHUM valor que satisfaça a condição, o valor é UNDEFINED

const par = array.find(item => item % 2 === 0)

document.body.innerText = JSON.stringify(par) //2

// -----------------------------------Find------------------------------------------//


// -----------------------------------FindIndex------------------------------------------//

//O Find Serve para encontrar o Index de um item do arrray

// o retorno do find, será o INDEX do PRIMEIRO VALOR QUE SATISFAÇA A CONDIÇÃO

//Caso não haja NENHUM valor que satisfaça a condição, o valor é UNDEFINED

const parIndex = array.findIndex(item => item % 2 === 0)

document.body.innerText = JSON.stringify(parIndex) //1

// -----------------------------------FindIndex------------------------------------------//


// -----------------------------------Reduce------------------------------------------//

//O Reduce é utilizamo quando queremos reduzir o nosso array inicial eu um item final

/*Sua sintaxe é a seguinte: .reduce(function(acumulador, valorAtual) {
}, valor inicial (Gerlamente é 0))
                            
*/
const soma = array.reduce((acc, item) => {
    return acc + item
}, 0)

document.body.innerText = JSON.stringify(soma)

// -----------------------------------Reduce------------------------------------------//
