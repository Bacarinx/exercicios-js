const alunos = [
    {nome: 'João', nota: 8.9},
    {nome: 'Maria', nota: 9.5}
]

//imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//declarativa
const getNota = array => array.nota
const soma = (total, atual) => total + atual
total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
