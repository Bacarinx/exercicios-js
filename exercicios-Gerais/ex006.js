function inverso (parametro) {
    if(typeof parametro ===  "number") {
        resultado = parametro - (2 * parametro)
        console.log(resultado)
    } else if (typeof parametro === "boolean") {
        console.log(!parametro)
    } else if (parametro != "number" && parametro != "boolean") {
        console.log(`Booleano ou número esperados,mas o parâmetro é do tipo ${typeof parametro}`)
    }
}

inverso (1)
inverso (true)
inverso ("olá")