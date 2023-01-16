function verificarBissexto (ano) {
    if (ano % 4 == 0){
        if (ano % 100 == 0 && ano % 400 !=0){
            console.log(false)
        } else if(ano % 400 == 0 && ano % 100 == 0) {
            console.log(true)
        } else {
            console.log(true)
        }
    } else {
        console.log(false)
    }
}
verificarBissexto (2100)