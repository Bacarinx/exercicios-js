const nums = [1, 2, 3, 4, 5]

// For com propósito

let resultado = nums.map(function(e){
    return e * 2
}) 
    
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${e.toFixed(2).toString().replace("." , ",")}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
