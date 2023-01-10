function alterarSalario(plano, salarioAntigo) {
    switch (plano) {
        case 'A': 
            novoSalario = salarioAntigo + (salarioAntigo*0.10)
            console.log (`Seu novo salario é de: R$${novoSalario}`)
            break
        case 'B': 
            novoSalario = salarioAntigo + (salarioAntigo*0.15)
            console.log (`Seu novo salario é de: R$${novoSalario}`)
            break
        case 'C': 
            novoSalario = salarioAntigo + (salarioAntigo*0.20)
            console.log (`Seu novo salario é de: R$${novoSalario}`)
            break
        default:
            console.log("Plano inválido!")
    }
}
alterarSalario('A', 1000)
alterarSalario('B', 1000)
alterarSalario('C', 1000)
alterarSalario('D', 1000)