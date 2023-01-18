require('./global')

console.log(minhaApp.saudacao())

//um problema de deixar o objeto global, é que todos podem alterar, mas podemos arrumar isso deixando o objeto em freeze
minhaApp.nome = 'Eita'
console.log(minhaApp.nome)