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

const dobro = {
    _v: 0,
    get v() {
        return 'value:' + _v
    },
    set v(valor) {
        _v = valor * 2
    }
}
dobro.v = 3
console.log(dobro.v)