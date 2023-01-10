function substituiValorPorDinheiro (valor) {
    valorEmreais = `R$${valor.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmreais)
}

substituiValorPorDinheiro (2.75644)