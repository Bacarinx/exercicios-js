function filtrarNumeros (array) {
    const apenasNumeros = elemento => typeof elemento === 'number'
    console.log(array.filter(apenasNumeros))
}

 const aleatorio = [1, 'olá', 'oi', 65, true, 'cachorro', 7]
 filtrarNumeros(aleatorio)