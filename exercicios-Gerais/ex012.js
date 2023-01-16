function removerPropriedade (objeto, propriedade) {
    Reflect.deleteProperty(objeto, propriedade)
    console.log(Object.entries(objeto))
}

removerPropriedade ({
    nome: "Henrique",
    idade: 17,
    lindo: true
}, "nome")