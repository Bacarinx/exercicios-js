function carros(marca, modelo, ano) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

const carro1 = new carros ('Changer', 'RT', 1970)
console.log(carro1)