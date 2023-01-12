//constante aponta para um endereço que aponta para o lugar criado
// pessoa -> 123 -> {...}
const pessoa = {
    nome: 'Joao'
}
// podemos alterar o valor de um atributo, mas não o atributo em si
pessoa.nome = 'Pedro' //PERMITIDO
console.log(pessoa)

// não podemos alterar o atributo do objeto, mesmo sendo ele o mesmo nome
// pessoa -> 456 -> {...}
/*
* pessoa = {nome: 'Ana'} //NÂO PERMITIDO
* console.log (pessoa)
*/

Object.freeze(pessoa) //após dar um 'freeze' o atributo não pode mais receber valor nenhum
pessoa.nome = 'Maria'
console.log(pessoa)

