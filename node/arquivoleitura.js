// 1° passo - importar o fs (file system) ja vem incluso no NODE
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo)=> {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//para exibir um arquivo JSON, não precisa seguir o metodo acima
const config = require('./arquivo.json')
console.log(config.db)

//mostrando todos os arquivos da pasta atual (node)
fs.readdir(__dirname, (err, conteudo) => {
    console.log("Conteudo da pasta...")
    console.log(conteudo)
})