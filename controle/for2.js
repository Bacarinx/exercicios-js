const notas = [6.2, 5.7, 1.7, 8.5, 7.9]

for (let i in notas) { //a estrutura for in utilizada, varre todos os itens denominado pela variavel "i" do array notas
    console.log (`nota ${i} = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 20,
    peso: 70
}

for(let atributo in pessoa) { //neste caso foi varrido, todos os "atributos" do objeto pessoa
    console.log (`${atributo} = ${pessoa[atributo]}`)
}