function imprimirJuroSimples (CI, taxaJuro, tempoDeAplicacao) {
    jurosimples = CI * taxaJuro * tempoDeAplicacao
    console.log (`O juro simples é de: R$${jurosimples}`)
}

function imprimirJuroCompostos (CI, taxaJuro, tempoDeAplicacao) {
    let montante = CI * Math.pow((taxaJuro + 1), tempoDeAplicacao)
    juroComposto = montante - CI
    console.log(`O juro composto é de: R$${juroComposto}`)
}

imprimirJuroSimples(1000, 0.02, 2)
imprimirJuroCompostos(5000, 0.01, 12)

