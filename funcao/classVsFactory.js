class pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

const criarPessoa = (nome) => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()