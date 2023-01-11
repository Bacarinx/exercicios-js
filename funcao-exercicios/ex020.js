function quantidadeDeCelulas(dinheiro) {
    let notaDe1 = 0
    let notaDe10 = 0
    let notaDe50 = 0
    let notaDe100 = 0
    restoDoDinheiro = 0


    if (dinheiro >= 100) {
        notaDe100 = Math.floor(dinheiro / 100)
        restoDoDinheiro = dinheiro - (notaDe100 * 100 )

        if(restoDoDinheiro >= 50 && restoDoDinheiro < 100){
            notaDe50 = Math.floor(restoDoDinheiro / 50)
            restoDoDinheiro = restoDoDinheiro - (notaDe50  * 50)
        }

            if(restoDoDinheiro >= 10 && restoDoDinheiro < 50){
                notaDe10 = Math.floor(restoDoDinheiro / 10)
                restoDoDinheiro = restoDoDinheiro - (notaDe10  * 10)
            }   

                if(restoDoDinheiro >= 1 && restoDoDinheiro < 10){
                    notaDe1 = Math.floor(restoDoDinheiro / 1)
                }

    console.log (`nota de R$100: ${notaDe100}`)
    console.log (`nota de R$50: ${notaDe50}`)
    console.log (`nota de R$10: ${notaDe10}`)
    console.log (`nota de R$1: ${notaDe1}`)

    } else if (dinheiro >= 50 && dinheiro < 100) {
        notaDe50 = Math.floor(dinheiro / 50)
        restoDoDinheiro = dinheiro - (notaDe50 * 50 )

        if(restoDoDinheiro >= 10 && restoDoDinheiro < 50){
            notaDe10 = Math.floor(restoDoDinheiro / 10)
            restoDoDinheiro = restoDoDinheiro - (notaDe10  * 10)
        }

            if(restoDoDinheiro >= 1 && restoDoDinheiro < 10){
                notaDe1 = Math.floor(restoDoDinheiro / 1)
            }   
            
        console.log (`nota de R$50: ${notaDe50}`)
        console.log (`nota de R$10: ${notaDe10}`)
        console.log (`nota de R$1: ${notaDe1}`)

        } else if(dinheiro >= 10 && dinheiro < 50){
            notaDe10 = Math.floor(dinheiro / 10)
            restoDoDinheiro = dinheiro - (notaDe10  * 10)
        
            if(restoDoDinheiro >= 1 && restoDoDinheiro < 10){
                notaDe1 = Math.floor(restoDoDinheiro / 1)
            } 

        console.log (`nota de R$10: ${notaDe10}`)
        console.log (`nota de R$1: ${notaDe1}`)

    }else if(dinheiro >= 1 && dinheiro < 10){
        notaDe1 = Math.floor(restoDoDinheiro / 1)

        console.log (`nota de R$1: ${notaDe1}`)
    } 

}

quantidadeDeCelulas(746)
