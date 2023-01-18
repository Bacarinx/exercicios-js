//importamos um modulo usando o 'require'

const moduloA = require('./moduloA')
const { boaNoite } = require('./moduloB')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemvindo)
console.log(moduloA.atelogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())