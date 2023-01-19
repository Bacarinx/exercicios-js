// Operador... rest(juntar)/Spread(espalahar)
// usar rest como parâmetro de função

//Usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12399.99}
const clone = {ativo: true, ...funcionario} //espalha todos os elementos do OBJ funcionarios no OBJ clone
console.log( clone ) //ativo: true, nome: 'Maria', salario: 12399.99

// usar spread com arrays
const grupoA = ['Joao', 'pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA] //espalaha os elementos do array grupoA no grupoFinal
console.log(grupoFinal) //'Maria', 'Rafaela', 'Joao', 'pedro', 'Gloria'