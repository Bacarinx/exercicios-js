function buscarPalavrasSemelhantes (palavra, array) {
    console.log(array.filter(e => e.includes(palavra)))
}
buscarPalavrasSemelhantes ("pro", ["programação", "mobile", "profissional"])