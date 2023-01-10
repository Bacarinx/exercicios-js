function calculoAnuidadeAssociacao (mes) {
    let anuidade = 1000
    if (mes == 1) {
        valorFinalAnuidade = anuidade
        console.log(`O Valor a ser pago da sua anuidade é de: R$${valorFinalAnuidade}`)

    } else if (mes > 1 && mes <= 12) {
        valorFinalAnuidade = (anuidade * Math.pow(1 + 0.05, mes))
        console.log (`O Valor a ser pago da sua anuidade é de: R$${valorFinalAnuidade.toFixed(2).toString().replace('.' , ',')}`)
    }
}
calculoAnuidadeAssociacao(1)
calculoAnuidadeAssociacao(4)