//template Literals 
const name = 'Henrique';
const message = `Bem vindo, ${name ? name : 'visitante'}`;

document.body.innerText = message