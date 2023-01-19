// não indexada / não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Santos')
times.add('Flamengo')

console.log(times)
console.log(times.size)

const nomes = ['Raquel', 'Lucas', 'Julia']
const nomesSet = new Set(nomes)
console.log(nomesSet)