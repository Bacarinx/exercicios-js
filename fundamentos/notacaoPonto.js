
const obj1 = {}
obj1.nome ='bola'
console.log(obj1.nome)

function obj (nome) {
    this.nome = nome
}

const obj2 = new obj ('cadeira')
const obj3 = new obj ('mesa')
console.log(obj2.nome)
console.log(obj3.nome)



function pessoas (nome, idade, sexo, interesses){
    this.nome = nome,
    this.idade = idade,
    this.sexo = sexo,
    this.interesses = interesses
}

const pessoa1 = new pessoas (['Henrique, bacarin'], 18, 'Masculino', 'Jogar')
const pessoa2 = new pessoas (['Thayná, Araújo'], 18, 'Feminino', 'Ler')



console.log(pessoa2)






 
