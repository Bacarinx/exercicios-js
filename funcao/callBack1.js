const fabricantes = ['Mercedes', 'audi', 'BMW']

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

//--------------------------------------------------------------//



setTimeout( () => console.log('Essa mensagem será exibida depois de 3 segundos'), 3000) 
//O exemplo acima, é uma arrow function que serve como callback function
