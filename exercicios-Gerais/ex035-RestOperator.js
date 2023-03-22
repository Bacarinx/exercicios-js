// Rest operator 

// quando eu utilizo o operador rest ..., o valor retornado será o restando do objeto/array que está no "resto" dele, ou seja, toda a informação restante, tirando o "name" neste caso

const { name, ...rest } = user; //desestruturando e rest

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]; //array padrão

const ultimo = numbers[9] //forma padrão 

const [first, second, ...resto] = numbers;


document.body.innerText = JSON.stringify({first, second, resto})