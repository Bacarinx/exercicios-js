function diaUtil (dia) {
    switch (dia){
        case 1: case 7: 
            console.log("Hoje é final de semana")
            break
        case 2: case 3: case 4: case 5: case 6: 
            console.log ("Hoje é dia Útil")
            break
        default: 
            console.log("Dia inválido")
    }
}

diaUtil (1)
diaUtil (2)
diaUtil (3)
diaUtil (4)
diaUtil (5)
diaUtil (6)
diaUtil (7)