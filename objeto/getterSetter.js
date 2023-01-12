const sequencia = {
    _valor: 1, //convenção -> indica que a variavel vai ser acessada apenas internamente
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) { 
            this._valor = valor 
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 500
console.log(sequencia.valor, sequencia.valor)
