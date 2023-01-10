// closure é o escopo criado quando auma função é declarada
//esse escopo permite a função acessar e manipular variaveis externas à função

//contexto Lexico em Ação!!

const x = "GLobal"

function fora() {
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())