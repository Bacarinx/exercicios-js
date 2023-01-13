const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c} } // no JSON, as funções não aparecem -> {"a":1,"b":2,"c":3}
console.log(JSON.stringify(obj))  //transformando OBJ em JSON

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Transformando Json em OBJ
console.log(JSON.parse('{"a": 1, "b": "olá", "c": true, "d": {}, "e": [] }'))
