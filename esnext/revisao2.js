// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3)) //5

// Arrow Function This
const lexico1 = () => console.log(this === exports) //Na arrow function, o This sempre vai apontar para exports
lexico1() //true

//Parametro Default
function log(texto = 'Node') {
    console.log(texto)
}
log() //'Node'
log("Sou mais forte") //"sou mais forte"

// operador rest
function total(...nums) { //operador rest é o "..." dentro do parametro da função
    let total = 0
    nums.forEach(n => total += n) 
    return total
}
console.log(total(2, 3, 4, 5))