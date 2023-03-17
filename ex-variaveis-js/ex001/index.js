const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']

const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    // Gerando um valor aleatório entre 0 e 3
    const randomNumber = gerarNumeroAleatorio()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function gerarNumeroAleatorio () {
    return Math.floorMath.random()*colors.length
}
