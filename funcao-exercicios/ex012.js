function imrpimirFatorial (numero) {
   if (numero == 0){
    return 1
   } else {
    return numero * imrpimirFatorial(numero-1)
   }
}

console.log(imrpimirFatorial(5))