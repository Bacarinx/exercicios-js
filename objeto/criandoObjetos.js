// Usando a notação literal
const obj1 = {
}
console.log(obj1)

//object em JS
const obj2 = new Object
console.log(obj2)

//Função construtora
function Produto(nome, preco, desc) {
    this.nome = nome //quando coloco o this, quer dizer que este atributo vai se toranr publico e qualque pessoa pode alterar
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}

const p1 = new Produto ('Caneta', 7.99, 0.15)
const p2 = new Produto ('notebook', 2998.99, 0.15)
console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2))

//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 3000, 3)
const f2 = criarFuncionario('Maria', 5000, 6)
console.log (f1.getSalario(), f2.getSalario())

// objeto.create
const filha = Object.create(null)
filha.nome = "ana"
console.log(filha) 