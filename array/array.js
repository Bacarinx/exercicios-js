

let aprovados = new Array('Bia', 'Ana', 'Carlos') //forma não literal
console.log(aprovados)

aprovados = ['Bia','Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1]) 
console.log(aprovados[2])

aprovados[2] = 'Paulo' //substituindo o 3° elemento
aprovados.push('Abia') //adicionando um valor no ultimo indice do array
console.log(aprovados.length)

aprovados.sort() //reorganiza os elementos do array 
console.log(aprovados)

delete aprovados[1] //deleta o valor do indice 1 e deixa ele indefinido
console.log(aprovados[1]) //indefinido

aprovados = ['Bia', 'Ana', 'Thayna', 'Carlos', 'Henrique']
console.log(aprovados) //[ 'Bia', 'Ana', 'Thayna', 'Carlos', 'Henrique' ]

aprovados.splice(1, 2,) //Sintaxe: ((elemento que vai ser modificado), (quantos apartir deles que serão excluidos), (novos elementos) )
console.log(aprovados) //[ 'Bia', 'Carlos', 'Henrique' ]

aprovados.splice(1, 0, 'Thayna', 'Ana')
console.log(aprovados)

