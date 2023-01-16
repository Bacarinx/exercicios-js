function calcularMedia (array) {

    const media = (acc, cur) => (acc + cur) 
    console.log(array.reduce(media) / array.length )
}

calcularMedia([1, 2, 3, 4])