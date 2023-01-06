//par nome/valor

const saudacao = "opa" //contexto léxico 1

function exec() {
    const saudacao  = 'Falaaa' //contexto léxico 2
    return saudacao
}

const cliente = {
    nome: 'João',
    idade: 18,
    peso: 87,
    endereco: {
        logradouro: 'rua da felicidade',
        numero: 113
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)