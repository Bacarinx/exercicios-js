function objetoParaArray (objeto) {
    console.log(Object.entries(objeto))
}
const pessoa = {
    nome: 'Maria',
    idade: 19,
    profissao: 'Professora'
}
objetoParaArray(pessoa)