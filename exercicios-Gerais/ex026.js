function removerVogais (frase) {
    const vogais = ["a", "A", "e", "E", "I", "i", "o", "O", "u", "U"]
    vogais.forEach (vogal => frase = frase.replace(vogal, ''))
    console.log(frase)
}
removerVogais("Olá mundo, sou eu o Henrique")