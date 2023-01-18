const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheres = e => e.genero == "F"
const chineses = e => e.pais =="China"
const menorSalario = (acc, cur) => (acc.salario < cur.salario) ? acc : cur

axios.get(url).then(response => {
    const funcionarios = response.data

    console.log(funcionarios.filter(mulheres).filter(chineses).reduce(menorSalario))
})
