//Iniciamos uma função construtora com letra maiúscula
//para fazer uma construção, utilizamos o "this"
//sua principal função é construir um objeto

//O exemplo abaixo é de uma função construtora de ventiladores
function Ventilador(velMax) {
    this.velocidadeMaxima = velMax;
    this.ligado = false
}


//instâncias

//Para criar uma instância, utilizamos a palavra reservada "New" seguida da chamada da função
const ventilador1 = new Ventilador(3)


//acessando as propriedades
console.log(ventilador1.velocidadeMaxima) //retorna 3
console.log(ventilador1.ligado)


//diferente de outras linguagens, podemos adicionar propriedades e métodos em tempo de e xecução:
ventilador1.cor = "branco" 
console.log(ventilador1.cor)

ventilador1.ligaDesliga = function() {
    if(this.ligado) {
        this.ligado = false     
    } else {
        this.ligado = true
    }
}

//ao chamar a função o valor do atributo "ligado" passa de true para verdadeiro ou vice-versa
ventilador1.ligaDesliga() 
console.log(ventilador1.ligado)
ventilador1.ligaDesliga()
console.log(ventilador1.ligado)

//Mostrando todas as propriedades do objeto ventilador1
console.log(ventilador1)
