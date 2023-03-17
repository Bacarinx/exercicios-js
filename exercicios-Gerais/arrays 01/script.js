// Map() -> serve para mapear todos os elementos de um array para outro array

//array de números que vamos modificar
const numbers = [1, 4, 5, 9, 14, 23]

//com o map neste exemplo, vamos usálo para dobrar todos os valores do array
const dobrarValor = numbers.map(function(elem) {
    return elem * 2
})

const somenteParDobro = numbers.map(elem => {
    if(elem % 2 == 0) {
        return elem * 2
    } else {
        return 0
    }
})

//convertendo uma String
const palavras = ["Oi", "Tudo bem?"]

const gritos = palavras.map(palavra => palavra.toUpperCase())


//conversor de medida de temperatura
const temps = [0 , 32, 45, 50, 75, 80, 120]

//formula realizada, e percorrendo o array
const celsus = temps.map(elem => ((elem - 32) * 5/9).toFixed(0))

console.log(dobrarValor)
console.log(somenteParDobro)
console.log(celsus)
console.log(gritos)

// ------------------------------------------------------//


//Filter() -> utilizamos o filter quando é preciso remover elementos indesejados com base em algumas condições 

//no filter são passados 3 parametro na função: elem, index, arr
const yetAnotherArray = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5]

//removendo elementos duplicados do array
const semDuplicado = yetAnotherArray.filter(function (elem, index, arr) {
    return arr.indexOf(elem) === index
})

console.log(semDuplicado)

const alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
  ];

  const aprovados = alunos.filter( function(elem, index) {
    return elem.media >= 6
  })

  console.log(aprovados)
  // ----------------------------------

  //Reduce() -> usado quando é preciso reduzir todo o array em um só valor

  const dimensoes = [
    { altura: 10, comprimento: 20},
    { altura: 2, comprimento: 4},
    { altura: 1, comprimento: 1},
    { altura: 50, comprimento: 50}
  ]

  const multiplicado = dimensoes.map(elem => elem.altura * elem.comprimento)

  const total = multiplicado.reduce(function(prev, acc) {
    return prev + acc
  }, 0)

    console.log(`Resultado da mult: ${total}`)


  const rockets = [
    {country: "Russia", launches: 32 },
    {country: "Us", launches: 23 },
    {country: "China", launches: 16 },
    {country: "Europe", launches: 7 },
    {country: "India", launches: 4 }
  ]

const totalLancamentos = rockets.reduce(function(prev, acc) {
    return prev + acc.launches
}, 0)

console.log(totalLancamentos)

// ----------------------------------------------------------------------//

//every() -> Usado para testar se todos os elementos do array passam por um teste específico

//verificando se todos os elemtnos do array são maior que 10

const numeros = [12, 5, 8, 130, 14]

const maiores = numeros.every(function(elem) {
    return elem > 10
})

console.log(maiores)

//verificando se todos possuem mais de 18 anos
const tchurma = [
    {id: 12, name: "Frederico", age: 8},
    {id: 47, name: "Francisca", age: 7},
    {id: 10, name: "Ramon", age: 48}
]

const maiores18 = tchurma.every( elem => elem.age >= 18)
console.log(maiores18)

//--------------------------------------------------------

//some() -> Usado quando é preciso testar quando apenas UM elemento passa em uma condição

//verificando se há algum número primo no array
function isPrimo (valor) {
    for (let i = 2; i < valor; i++) {
        if(valor % i === 0 ) {
            return false
        }
    }
    return valor > 1
}

const oneMoreArray =  [6, 8, 11, 14, 42]

console.log(oneMoreArray.some(isPrimo))


//verificando por condições em valores / objetos
const team = [ 
    {id: 12, name: "Frederico", pilot: true},
    {id: 47, name: "Francisca", pilot: true},
    {id: 10, name: "Ramon", pilot: false}
]

console.log(team.some(elem => elem.pilot))

//--------------------------------------------------

//find() -> Utilizado para procurar algum valor dentro de um array, sendo que o retorno é o primeiro valor que passar no teste

const pizzas = [
    "mussarela", "Calabresa", "portuguesa", "marguerita"
]

const foundPizza = pizzas.find( elem => elem.startsWith("m"))
console.log(foundPizza)


const fruits = [
    { name: "Jaca", quantity: 2 },
    { name: "banana", quantity: 2 },
    { name: "cereja", quantity: 2 }
]

const foundFruit = fruits.find(elem => elem.name == "cereja")
console.log(foundFruit) 

//---------------------------------------------------------------------------------

//includes() -> usado para saber se um determinado array possui um determinado elemento, o return é booleano

console.log( [1, 2, 3].includes(2) )

const people = ["Adamastor", "Joana", "Mauricio", "Lalau"]

console.log(people.includes("Joana"))