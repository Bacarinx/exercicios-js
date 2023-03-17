//definindo um valor default apartir de um operador OR
// const enable = prop || true //neste caso, a variavel vai receber o valor "prop" OU, se o mesmo não existir, será "true"

function toggleMenu(toggle) {
    let enables = toggle || true
    return enables 
}

console.log(toggleMenu(false)) //true
//neste caso o retorno de qualquer parâmetro falso (0, "", false) será retornado outro valor

//para para com esse problema utilizamos o operador Nulish Coalescing que verifica somente se o valor é null ou indefined
function toggler(toggle) {
    let enables = toggle ?? true
    return enables 
}

console.log(toggler(false)) //false
