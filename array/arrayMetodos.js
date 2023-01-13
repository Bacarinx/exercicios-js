const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //exclui o ultimo item do array
console.log(pilotos)

pilotos.push ('Verstapen') //adiciona no ultimo item o array
console.log(pilotos)

pilotos.shift() //exclui o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Massa', 'Hamilton') //adiciona elementos no primeiro indice do array
console.log(pilotos)

//adicionando com splice
pilotos.splice(1, 0, 'Bottas')
console.log(pilotos)

//removendo com splice
pilotos.splice(3, 2)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)// novo array gerado apartir do indice 2
console.log(algunsPilotos1) //[ 'Hamilton', 'Verstapen' ]

const algunsPilotos2 = pilotos.slice(1, 4) //novo array, apartir do indice 1 até o indice 3
console.log(algunsPilotos2)  //[ 'Bottas', 'Hamilton', 'Verstapen' ]
