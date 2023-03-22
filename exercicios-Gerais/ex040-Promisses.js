//Promisses 

//acompanhado das promises, vem o .then e o .catch

// -------------------Exemplo 1 de promises --------------
const somaDoisNumeros = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    });
}

somaDoisNumeros(2, 4)
    .then(soma => {
        document.body.innerText = soma
    })
    .catch(err => {
        console.log(err)
    })
//---------------------------------------------------------


//-----------------------Exemplo real de promises ------------
//quando precisamos usar um aninhamento de respostas a promise, podemos colocá-las uma embaixo da outra:
fetch('https://api.github.com/users/Bacarinx')

    .then(response => response.json())
    .then(body => console.log(body))

    .catch(err => console.log(err))

    .finally(() => {
        console.log('Deu')
    })
// ------------------------------------------------------------


//---------Mudando o exemplo acima para Async e await------
async function buscaDadosNoGithub() {
    try{
        const response = await fetch('https://api.github.com/users/diego3g');

        const body = await response.json()

        console.log(body)

        return body.name;

    } catch (err) {
        console.log(err)
    } finally {
        console.log('DEUUUU')
    }
}

buscaDadosNoGithub()
    .then(name => document.body.innerText = name)

/* 
conclusões finais:

    1- Quando utilizamos o async antes da função, ela vira uma promise;

    2- Quando quisermos esperar por uma chamada para prosseguir ocm o código, devemos utilizar o await antes da escrita dele;

    3- No try, colocamos o código que será testado, caso ele passe, é ele quem será executado;

    4- No catch tratamos o erro, caso o código não passe no try, ele cairá nesta parte;

    5- no finally executamos um código que executará tanto se der certo ou errado a chamada da promise;

    6- Podemos aninhar uma série de then para obter respostas das respostas.


*/
