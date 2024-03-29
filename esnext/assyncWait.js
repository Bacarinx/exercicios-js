const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` //url que foi usada como teste

    return new Promise((resolve, reject) => { //criando a promise com o resolve e o reject
        http.get(url, res => { //utilizando o metodo Get do http
            let resultado = ''
    
            res.on('data', dados => { 
                resultado += dados
            })
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado)) //caso dê certo sera exibido o resultado
                }catch(e){
                    reject(e) //caso contrario sera exibido o erro 
                }
            })
        })
    })
}

//recurso do ES8
// Objetivo de simplificar o uso de promisses

let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} //retorna um objetco AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

