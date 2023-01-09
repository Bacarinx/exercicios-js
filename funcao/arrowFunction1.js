let dobro = function(a) { //função normal
    return 2 * a
}

dobro = (a) => { //função arrow =   variavel -> = --> atributos (vazio ou não) --> simbolo arrow --> return (caso de 1 linha)
    return 2 * a
}

dobro = a => 2 * a //return implicito pois só há uma linha de codigo na function
console.log(dobro(Math.PI)) //retorna o dobro de PI

//-------------------------------------------------------------//

let ola = function () { //função normal
    return "Olá"
}

ola = () => 'olá' //função arrow com retunr implicito2'
console.log (ola())
