function soBoaNoticia (nota) {
    if (nota >= 7) {
        console.log ("aprovado com " + nota)
    }
}

soBoaNoticia (8.1)
soBoaNoticia (5.8)

function seForVernadeEuFalo (valor) { //fução que verifica se há um valor verdadeiro
    if (valor) {
        console.log ('É verdade ...' + valor)
    }
}

seForVernadeEuFalo ()
seForVernadeEuFalo (null)
seForVernadeEuFalo (undefined)
seForVernadeEuFalo (NaN)
seForVernadeEuFalo (-1)
seForVernadeEuFalo (' ')
seForVernadeEuFalo ([])
seForVernadeEuFalo ([1, 2])
seForVernadeEuFalo ({})