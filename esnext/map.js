const tecnologia = new Map()
tecnologia.set(['react'], { framework: false})
tecnologia.set('angular', {framework: true})

// console.log(tecnologia.get('react')) //{ framework: false }
// console.log(tecnologia.get('react').framework) // false

console.log(tecnologia.size) //quantos elementos possui


const chavesVariadas = new Map([
    [function () { }, 'função'], //[Function (anonymous)] função
    [{}, 'Objeto'], //{} Objeto
    [123, 'Numero'] //123 Numero
])
chavesVariadas.forEach((vl, ch) => {
    console.log( ch, vl)
})

console.log(chavesVariadas.has(123)) //true
chavesVariadas.delete(123) //deletando 123 do Map
console.log(chavesVariadas.has(123)) //false

console.log(chavesVariadas.size) //quantos elementos possui
