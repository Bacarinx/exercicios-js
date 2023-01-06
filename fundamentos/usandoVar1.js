 {
    {
        {
            {
                var sera = 'SERÁ???' //variável global
            }
        }
    }
 }

 function teste () {
    var local = 123 //variável local, só funciona dentro da function
    console.log (local) 
 }

 teste()
 console.log(local) //linha de código causa erro pois a variável só funciona dentro da function
 console.log(sera) //funciona pois a variável "sera" é global, funciona em qualquer lugar
 
 