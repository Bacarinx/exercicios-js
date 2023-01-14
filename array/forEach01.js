// percorrendo um array por ForEach como uma função anonima
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel ']

aprovados.forEach(function(nome, indece){ 
    console.log(`${indece + 1}- ${nome}`)
}) 

//------------------------------------------------------//

//percorrendo o array apartir de uma arrow function 
aprovados.forEach(nome => console.log(nome))

// percorrendo apartir de uma function que está em uma constante
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


