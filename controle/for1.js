let contador = 1
while (contador <= 10) {
    console.log('contador = ' + contador)
    contador++
}

for (let i = 0; i <= 10; i++) {
    console.log ('i = ' + i)
}

//estrutura pra exibir as notas de um array
const notas = [6.7, 7.4, 3.1, 8.5]
for (let i = 0; i < notas.length; i++) { //.length é uma código utilizado para saber quantos valores há dentro de um array
    console.log ('Nota: ' + notas[i])
}