function inverter (objeto) {
    const objetosInvertidos = {}

    Object.entries(objeto).forEach( parChaveValor => {
        const chave = 0,
        valor = 1
        
        objetosInvertidos[parChaveValor[valor]] = parChaveValor[chave]
    })
    console.log( objetosInvertidos)
}

inverter({
    Nome: 'Henrique',
    idade: 17
})