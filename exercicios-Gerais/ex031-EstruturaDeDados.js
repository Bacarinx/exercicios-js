const tags = new Set([]); 
//quando a gente cria uma instancia com o nemo de "set", algumas partes da linguagem tem saus características modificadas
//Agora, não podemos mais adicionar dois items repitidos ao array, e ao inves de usar o .push usamos o .add

tags.add("js");
tags.add("javaScript");
tags.add("js");
tags.add("js");
tags.add("teste");

const result = Array.from(tags); //passando o a instância set como array para poder manipulá-lo em seguida

console.log(result); 

// -------------------------------------------------------------------------//

//criando array
const listaDeUsuarios = [
    {name: "Mario", username: "Bacarin"}
]

//criando um novo usuário para o array
const newUser = {name: "Mario", username: "Bacarin"};

//verificando se o username do primeiro usuario bate com o do novo usuario
const hasUser = listaDeUsuarios.find((user) => {
    return user.username === newUser.username 
});

if(!hasUser) { //se for diferente, o novo usuário será adicionado ao array, caso contrário não será adicionado
    listaDeUsuarios.push(newUser);
}

const resultado = listaDeUsuarios
console.log(resultado)

