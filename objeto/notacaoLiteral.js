const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //se formos utilizamo o nome do obj o mesmo que o da var, não precisamos repetir
const obj2 = {a, b, c} //basta utilizar essa sintaxe que o resultado é o mesmo
console.log(obj1, obj2)

//-------------------------------------------------------------//

//criando objeto a partir de uma string
const nomeAttr = 'nota'
const valorAttr = 7.87

//metodo mais complicado
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log (obj3)

//atribui o mesmo resultado, só que mais simples
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//------------------------------------------------------//

//criando funcao dentro de OBJ: não precisamos usar mais o : function
const obj5 = {
    funcao1: function() {
        //...
    }
}

//podemos simplificar desta forma:
const obj6 = {
    funcao2() {

    }
}

console.log(obj5, obj6)
