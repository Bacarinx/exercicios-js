
function repetir (elemento, vezes) {
    const array = []
    for (let i = 0; i < vezes; i++) {
        array.splice(elemento [i], 0, elemento)
    }
    console.log(array)
}
repetir ("olá", 5)