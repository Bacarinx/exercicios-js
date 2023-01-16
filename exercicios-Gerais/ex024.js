function contarCaractere (caractere, frase) {
    const palavra = frase.split(caractere)
    console.log(palavra.length - 1)
}
contarCaractere("r", "A sorte favorece os audazes")
contarCaractere("c", "conhece-te a ti mesmo")