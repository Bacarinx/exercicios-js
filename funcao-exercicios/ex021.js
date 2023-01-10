function calcularPrecoPlanoDeSaude (idade) {
    let precoConvenio = 100
    let adicionalNoValor = 0
    if (idade < 10) {
        let valorTotal = precoConvenio + 80
        console.log(`O valor do convenio para sua idade é de: ${valorTotal}`)
    } else if (idade >= 10 && idade < 30) {
        let valorTotal = precoConvenio + 50
        console.log(`O valor do convenio para sua idade é de: ${valorTotal}`)
    } else if (idade >= 30 && idade < 60) {
        let valorTotal = precoConvenio + 95
        console.log(`O valor do convenio para sua idade é de: ${valorTotal}`)
    } else if(idade >= 60) {
        let valorTotal = precoConvenio + 130
        console.log(`O valor do convenio para sua idade é de: ${valorTotal}`)
    }
}
calcularPrecoPlanoDeSaude(9)
calcularPrecoPlanoDeSaude(15)
calcularPrecoPlanoDeSaude(56)
calcularPrecoPlanoDeSaude(79)