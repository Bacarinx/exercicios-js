function carro(velocidadeMaxima = 200, delta = 5){
    //atribturo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) { //deixamos a função publica apartir do This
            velocidadeAtual += delta //função que verifica e acresenta o delta a velocidade atual do carro
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    } //fechamento do método publico

    //metodo Publico
    this.getVelocidadeAtual = function () { //deixamos a função publica apartir do This
        return velocidadeAtual //função que retorna a valocidade do carro
    }
}

const uno = new carro  //podemos passar ou não os parenteses para alterar o atributo da func. carro
const ferrari = new carro(350, 20)  //neste caso, a vel. Maxima é de 350 e delta de 20

uno.acelerar() //chama a função que adiciona o valor de delta na velocidade do carro
console.log(uno.getVelocidadeAtual()) //chama função, com o valor do carro que imprimi a velocidade atual

ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
