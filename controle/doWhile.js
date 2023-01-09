function imprimirInteiroEntre (min, max) {
    const valor = Math.random () * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do { 
    opcao = imprimirInteiroEntre(0, 10)
    console.log ('A opção escolhida foi ' + opcao)
} while (opcao != 0) 

console.log('Fim do laço')