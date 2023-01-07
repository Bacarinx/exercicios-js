function rand({min = 0, max= 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj)) //chama a função rand criada acima com os valores do objeto acima
console.log(rand({min: 500, max: 503})) //chama a função porém com os valores definidos nos atributos
console.log(rand({})) //chama a função acima somente
