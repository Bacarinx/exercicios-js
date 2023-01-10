function crescimentoAnual(altura1, taxaDeCrescimento1, altura2, taxaDeCrescimento2) {
    tempoUltrapassagem = 0

    if (altura1 > altura2 && taxaDeCrescimento1 > taxaDeCrescimento2){
        console.log("A 2° criança nunca ficará mias alta que a 1°")

    } else if (altura1 < altura2 && taxaDeCrescimento1 < taxaDeCrescimento2){
        console.log("A 1° criança nunca ficará mias alta que a 2°")

    } else if (altura1 > altura2 && taxaDeCrescimento1 < taxaDeCrescimento2) {
        while (altura1 > altura2) {
            altura1 = altura1 + (altura1 * taxaDeCrescimento1)
            altura2 = altura2 + (altura2 * taxaDeCrescimento2)
            tempoUltrapassagem++
        }
        console.log(`O tempo que a 2° criança demora pra ultrapassar a 1° é de: ${tempoUltrapassagem} anos`)

    } else if (altura2 > altura1 && taxaDeCrescimento2 < taxaDeCrescimento1) {
        while (altura2 > altura1) {
            altura1 = altura1 + (altura1 * taxaDeCrescimento1)
            altura2 = altura2 + (altura2 * taxaDeCrescimento2)
            tempoUltrapassagem++
        }
        console.log(`O tempo que a 1° criança demora pra ultrapassar a 2° é de: ${tempoUltrapassagem} anos`)
    }
}
crescimentoAnual(180, 0.01, 168, 0.04)
