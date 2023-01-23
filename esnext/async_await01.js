function esperarPor(tempo = 2000) { //função pra criar um tempo de espera
    return new Promise(resolve => {
        setTimeout ( () => {
            resolve(10)
        }, tempo)
    })
}

async function executar() {
    let valor = await esperarPor()

    await esperarPor(1000)
    console.log(`Async/Await ${valor}`)
    await esperarPor(1000)
    console.log(`Async/Await ${valor + 1}`)
    await esperarPor(1000)
    console.log(`Async/Await ${valor + 2}`)
}

executar()