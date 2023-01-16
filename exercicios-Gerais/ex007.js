function estaEntre (num, min, max, inclusivo) {
    num = num || 0
    min = min || 0
    max = max || 0
    inclusivo = inclusivo || false
    if( min > max ) {
        max = min + max
        min = max - min
        max = max - min
    }
    if (inclusivo === true) {
        if(num >= min && num <= max) {
            console.log(true)
        } else {
            console.log(false)
        }
    } else {
        console.log(false)
    }
}
estaEntre (10, 6, 15)
estaEntre (10, 20, 50)
estaEntre (10, 6, 15, true)
estaEntre (10, 20, 50, true)

