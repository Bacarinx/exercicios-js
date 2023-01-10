function calculadora (valor1, operacao, valor2) {
    switch (operacao){
        case '+':
            let soma = valor1 + valor2
            console.log ("o resultado da soma é de: " + soma)
            break

        case '-':
            let sub = valor1 - valor2
            console.log ("o resultado da subt é de: " + sub)
            break
        case '*':
            let mult = valor1 * valor2
            console.log ("o resultado da mult é de: " + mult)
            break

        case '/':
            let div = valor1 / valor2
            console.log ("o resultado da div é de: " + div)
            break
    }
}

calculadora(2, '/', 3)