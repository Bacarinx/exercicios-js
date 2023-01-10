console.log(soma(2, 4)) //se declararmos uma func. a partir da forma trad, podemos chamar ela antes da declaração
console.log(sub(2, 3)) //mas isso não acontece com a function expression, que só pode ser chamada depois da dec.

//function declaration --> forma tradicional
function soma(x, y) {
    return x + y
}

//function expression
const sub = function(x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}