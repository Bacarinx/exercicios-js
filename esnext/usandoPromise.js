//Com Promise...

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

// let nomes = []
// getTurma('A').then (alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then (alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then (alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))//testando um erro através do catch

getTurma('D').catch(e => console.log(e.message)) //testando um erro através do catch