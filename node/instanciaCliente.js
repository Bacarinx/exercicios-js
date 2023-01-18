const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //temos que chamar uma função depois do require, pois o elemento de instancia nova é uma função factory
const contadorD = require('./instanciaNova')()

contadorA.inc() //incrementando 1
contadorA.inc() //incrementando 1
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)

//este é um exemplo claro que quando fizermos uma exportação direta do Node, o cache é carregado em ambas variaveis, mas se atribuirmos uma função factory, novas instancias são criadas
