function simboloMais (vezes) {
    let final = ''
    for  (let i = 0; i < vezes; i++) {
        final = final + '+'
    }
    console.log('"'+ final + '"')
}
simboloMais(5)