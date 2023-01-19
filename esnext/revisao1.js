// let e const
{
    var a = 2
    let b = 3
    console.log(b) //Ja o let não
}
console.log(a) //o var pode ser acessado de fora do bloco


// Template String
const produto = 'ipad'
console.log(`${produto} 
é
caro`) // com ele é possivel quebra linhas 


// destructuring
const [l, e, ...tras] = "cod3r" //desestruturando String
console.log(l, e, tras)

const [x, y] = [1, 2] //desestruturando array
console.log(x, y)

const {idade, nome} = { nome: 'Ana', idade: 9} //desestruturando objeto
console.log(idade, nome)