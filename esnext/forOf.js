for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

//usando o For in para percorrer os indices
for (let i in assuntosEcma) {
    console.log(i)
}

//usando o For of para percorres os valores 
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

//criando um Map para percorrer os valores e chaves com o For of
const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

//percorrendo o conjunto
for (let assunto of assuntosMap) {
    console.log(assunto)
}

//percorrendo as chaves 
for(let chave of assuntosMap.keys()) {
    console.log(chave)
}

//percorrendo os valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

//percorrendo os dois, porém desestruturando eles
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}
