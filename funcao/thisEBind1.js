const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) //é necessário o uso do this, pois está remetendo acesso ao objeto pessoa, seria     a                            mesma coisa de escrever pessoa.falar, só que com uma sintaxe para dentro do objeto
    }
}
pessoa.falar()


const falar = pessoa.falar //podemos criar uma variavel para agregar na função
falar() //porém causa um conflito e não roda bem o this da função "Falar"

//Pordemos corrigir esse erro incrementando o elemento "Bind" na função falar
const falarDePessoa = pessoa.falar.bind(pessoa) //e colocamos no atributo da função, o objeto ou função que queremos corrigir o problema do this
falarDePessoa()
