console.log('01)', '1' == 1) //verdadeiro pois apenas verifica apenas o valor
console.log ('02)', '1' === 1) //falso pois agora verifica o tipo da variável
console.log('03)', '3' != 3) //falso pois há uma exclamação antes do igual, que significa o inverso
console.log('04)', '3' !== 3) //verdadeiro pelo mesmo motivo que o de cima

console.log('05)', 3 < 2) //menor que:
console.log('06)', 3 > 2) //maior que
console.log('07)' , 3 <= 2) //menor igual que
console.log('08)' , 3 >= 2) //maior igual que

const d1 = new Date (0)
const d2 = new Date (0)
console.log('09)', d1 === d2) //comparação estritamente igual
console.log('10)', d1 == d2) //comparação normal
console.log('11)', d1.getTime() == d2)

console.log('12)', undefined == null)
console.log('13)', undefined === null)