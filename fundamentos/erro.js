function tratarErro(erro) {
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomegritado (obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!') 
    } catch (e) {
        tratarErro(e)
        }
}

const obj = {nome: 'Roberto' }
imprimirNomegritado (obj)