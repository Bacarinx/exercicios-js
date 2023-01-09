let comparaComThis = function (param) {
    console.log(this ===param)
}

comparaComThis (global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) //setando o this da função para o obj
comparaComThis (global) //false
comparaComThis (obj) //true


let comparaComThisArrow = param => console.log (this === param)
comparaComThisArrow (global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) //não tem como atribuir qualquer coisa para o this na arrow function
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
