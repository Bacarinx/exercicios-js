//Usando CallBack
setTimeout(() => {
    console.log('Executando a 1° callBack')
    
    setTimeout(() => {
        console.log('Executando a 2° callBack')
        
        setTimeout(() => {
            console.log('Executando a 3° callback')
        }, 2000)
    }, 2000)
}, 2000)

//------------------------------------------------------//

//Usando Promise
function esperarPor(tempo = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout ( () => {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then( () => esperarPor())
    .then(esperarPor)