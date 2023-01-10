function pessoa (nome) {
    this.falar = () => {
        console.log(`Òlá meu nome é ${nome}`)
    }
}

const pessoa1 = new pessoa("Henrique")
pessoa1.falar()



