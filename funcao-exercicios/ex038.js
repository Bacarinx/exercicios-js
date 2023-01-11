function imprimirValoresimpares (min = 19, max = 139) {
    if (min > max) { //inversão de valores
        min = max + min
        max = min - max
        min = min - max
    }
    
    for(let i = min; i <= max; i++){
        if(i % 2 == 1){
            console.log(i)
        }
    }
}
imprimirValoresimpares()