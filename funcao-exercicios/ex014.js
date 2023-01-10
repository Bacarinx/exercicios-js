function testeDeFrutas (fruta) {
    switch (fruta) {
        case 'maçã': case 1: 
            console.log("não vendemos essa fruta aqui")
            break
        case 'kiwi': case 2: 
            console.log("Estamos em escassez de Kiwis")
            break
        case 'melancia': case 3:
            console.log ("Aqui esta! são 3 reais o Kg")
            break
        default: 
            console.log("Digito ou fruta inválida")
    }
}

testeDeFrutas(3)