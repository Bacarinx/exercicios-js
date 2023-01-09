//caso 1 - n1 maior e n2 menor
//caso 2 - n1 maior e n3 menor
//caso 3 - n2 maior e n1 menor
//caso 4 - n2 maior e n3 menor
//caso 5 - n3 maior e n1 menor
//caso 6 - n3 maior e n2 menor

const imprimirMenorEMaiorNumero = function (n1, n2, n3) {
    if (n1 > n2 && n2 < n3 && n1 > n3) { //n1 maior e n2 menor
        console.log ("O maior numero é o numero 1: " + n1 + " e o menor numero é o numero 2: " + n2)
    } else if (n1 > n2 && n2 > n3 && n1 > n3){ //n1 maior e n3 menor
        console.log ("O maior numero é o numero 1:  " + n1 + " e o menor numero é o numero 3: " + n3)
    } else if (n1 < n2 && n2 > n3 && n1 < n3){ //n2 maior e n1 menor
        console.log ("O maior numero é o numero 2: " + n2 + " e o menor numero é o numero 1: " + n1)
    } else if (n1 < n2 && n2 > n3 && n1 > n3){ //n2 maior e n3 menor
        console.log ("O maior numero é o numero 2: " + n2 + " e o menor numero é o numero 3: " + n3)
    } else if (n1 < n2 && n2 < n3 && n1 < n3){ //n3 maior e n1 menor
        console.log ("O maior numero é o numero 3: " + n3 + " e o menor numero é o numero 1: " + n1)
    } else if (n1 > n2 && n2 < n3 && n1 < n3){ //n3 maior e n2 menor
        console.log ("O maior numero é o numero 3: " + n3 + " e o menor numero é o numero 2: " + n2)
    }
}
    imprimirMenorEMaiorNumero (10, 8, 9)
    imprimirMenorEMaiorNumero (10, 9, 8)
    imprimirMenorEMaiorNumero (7, 10, 8)
    imprimirMenorEMaiorNumero (9, 10, 8)
    imprimirMenorEMaiorNumero (8, 9, 10)
    imprimirMenorEMaiorNumero (9, 8, 10)