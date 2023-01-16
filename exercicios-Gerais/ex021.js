function menorNumero (array) {
   const menor = Math.min(...array)
   console.log(menor)
}
const numeros = [1, 6, 2, 9, -5, -53, 7, 32]
menorNumero (numeros)
