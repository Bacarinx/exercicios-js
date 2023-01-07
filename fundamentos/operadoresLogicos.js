function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //op. lógico Or
    const comprarTelevisao50 = trabalho1 && trabalho2 //op. lógico and
    const comprarTelevisao32 = trabalho1 != trabalho2 //Xor ( ou exclusivo )
    const manterSaudavel = !comprarSorvete //operador Unário

    return { comprarSorvete, comprarTelevisao50, comprarTelevisao32, manterSaudavel} //Criação de um objeto para agregar as variaveis
}

console.log('caso 1)', compras(true, true))
console.log('caso 2)', compras(true, false))
console.log('caso 3)', compras(false, true))
console.log('caso 4)', compras(false, false))