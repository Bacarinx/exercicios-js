function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //se min for maior que maximo, inverter os valores
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) //retorna um valor entre 40 e 50
console.log(rand([992])) //retorna um valor entre 992 e 1000
console.log(rand([, 10])) //retorna um valor entre 0 e 10
console.log(rand([])) //retorna o valor padrão da function
