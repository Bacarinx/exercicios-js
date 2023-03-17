//criando um objeto do jeito convencional
const p1 = {
    name: "Computador",
    price: 3000.0,
    quantity: 2
}

const Product = function(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

//prototype: é a função pai da função contrutora, ele já dispõe algumas ferramentas de manipulação própria

//boa pratica: definir propriedades dentro do contrutor e métodos no prototype

//neste caso abaixo, foi criada uma função para descobrir o total de valor de estoque, e foi colocada dentro do prototype da funcao construtora
Product.prototype.total = function() {
    return this.price * this.quantity;
}


const p2 = new Product("Monitor", 800.00, 10);
const p3 = new Product ("Mouse", 50.00, 4);

//Para accesar o valor da função dentro do prototype utilizamos:
console.log(p2.total())
console.log(p3.total())

console.log(Product.prototype) //mostrando a estrutura do prototype

Product.prototype.add = function(amount) {
    this.quantity = this.quantity + amount
}

Product.prototype.remove = function(amount) {
    if(this.quantity >= amount ) {
        this.quantity = this.quantity - amount 
    }
}

Product.prototype.label = function() {
    return `Dados: ${this.name}, ${this.price.toFixed(2)}` 
}

