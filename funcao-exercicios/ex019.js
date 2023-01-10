function calcularPreco (codigo, quantidade) {
    switch (codigo) {
        case 100: 
            valorFinal = quantidade * 3
            console.log(valorFinal)
            break
    
        case 200: 
            valorFinal = quantidade * 4
            console.log(valorFinal)
            break
        
        case 300: 
            valorFinal = quantidade * 5.5
            console.log(valorFinal)
            break
        
        case 400: 
            valorFinal = quantidade * 7.5
            console.log(valorFinal)
                break
        
        case 500: 
            valorFinal = quantidade * 3.5
            console.log(valorFinal)
            break

        case 600: 
            valorFinal = quantidade * 2.8
            console.log(valorFinal)
            break
        default:
            console.log("codigo inválido!")
    }   
}

calcularPreco(100, 5)
calcularPreco(200, 5)
calcularPreco(300, 5)
calcularPreco(400, 5)
calcularPreco(500, 5)
calcularPreco(600, 5)