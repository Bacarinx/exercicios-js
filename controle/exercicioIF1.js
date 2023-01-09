const vogalOuConsoante = function (letra) {
    if (letra === 'a' || letra==='e' || letra ==='i' || letra=== 'o' || letra === 'u' || letra === 'A' || letra==='E' || letra ==='I' || letra=== 'O' || letra === 'U'){
        console.log ('A letra digitada ' + "'" + letra + "'" +' é uma vogal')
    } else {
        console.log ('A letra digitada ' + letra + ' é uma consoante')
    }
    console.log ('Final')
}
vogalOuConsoante ('a')
vogalOuConsoante ('A')
vogalOuConsoante ('b')

