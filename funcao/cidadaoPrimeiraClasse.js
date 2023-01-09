//função em JS é First-Class Object (citizens)
// higher-order function

//criar de forma literal
function fun1() {

}

//armazenar em uma variavel
const fun2 = function () {

}

//armazenar em um array
const fun3 = function (num1, num2){
    return num1 + num2
}

const array = [fun1, fun2, fun3] 
console.log(array[2](2,3)) 

//armazena em um atributo de objeto
const obj = {}
obj.falar = function (){
    return 'Opa'
}
console.log(obj.falar())

// passar função com parametro para outra função
function run (fun) {
    fun()
}
run(function () {console.log('Executando ...')} )

//uma função pode retornar/contem uma função
function soma(a, b) {
    return function (c) {
        console.log (a + b + c)
    }
}
soma(2, 3)(4)

