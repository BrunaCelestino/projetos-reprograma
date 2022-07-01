// // 5.2. Crie uma aplicação simples que faça uma busca no nosso banco de dados fake (let data)
//  pelo nome do filme (retorno único) ou gênero (retorno em lista) fornecido pela cliente, enviar
//   como resposta para cada filme encontrado um objeto com título, gênero e ano de lançamento;

let data = [
    {
      titulo: "us",
      genero: "terror",
      ano: "2019", 
    },
    {
      titulo: "transformers: O Lado Oculto da Lua",
      genero: ["ação", "sci-fi"],
      ano: "2011", 
    },
    {
      titulo: "moonfall - ameaça lunar",
      genero: ['Aventura', "sci-fi"],
      ano: "2022", 
    },
    {
      titulo: "casa gucci",
      genero: "drama",
      ano: "2021", 
    },
    {
      titulo: "encanto",
      genero: ["animação", "musical"],
      ano: "2021", 
    },
    {
      titulo: "Demon Slayer - Mugen Train",
      genero: ["ação", "fantasia"],
      ano: "2019", 
    },
    {
      titulo: "O Último Suspiro",
      genero: ["drama", "sci-fi"],
      ano: "2019", 
    },
    {
      titulo: "Suspiria",
      genero: "terror",
      ano: "1977", 
    },
    {
      titulo: "Corpo Elétrico",
      genero: ["drama", "ficção"],
      ano: "2017", 
    },
    {
      titulo: "Amour",
      genero: ["drama", "romance"],
      ano: "2012", 
    },
    {
      titulo: "Ninho de Musaranho",
      genero: "terror",
      ano: "2014", 
    },
    {
      titulo: "Colonia",
      genero: "suspense",
      ano: "2015", 
    },
    {
      titulo: "Homem-Aranha: Sem Volta para Casa",
      genero: ["ação", "aventura"],
      ano: "2021", 
    }]
  
    let buscaCliente1 = "suspense";
    let buscaCliente2 = "Corpo Elétrico";
    let buscaCliente3 = "Homem-Aranha: Sem Volta para Casa";
    let buscaCliente4 = "sci-fi";
    let buscaCliente5 = "romance";




// Cliente 1:
const cliente1 = data.filter(({titulo, genero}) => [genero].flat().includes(buscaCliente1) || titulo === buscaCliente1) ; 
console.log("Resultado da busca para Cliente 1:"); console.table(cliente1);

// Cliente 2:
const cliente2 = data.filter(({titulo, genero}) => [genero].flat().includes(buscaCliente2) || titulo === buscaCliente2) ; 
console.log("Resultado da busca para Cliente 2:"); console.table(cliente2);


// Cliente 3:
const cliente3 = data.filter(({titulo, genero}) => [genero].flat().includes(buscaCliente3) || titulo === buscaCliente3) ; 
console.log("Resultado da busca para Cliente 3:"); console.table(cliente3);


// Cliente 4:
const cliente4 = data.filter(({titulo, genero}) => [genero].flat().includes(buscaCliente4) || titulo === buscaCliente4) ; 
console.log("Resultado da busca para Cliente 4:"); console.table(cliente4);


// Cliente 5:
const cliente5 = data.filter(({titulo, genero}) => [genero].flat().includes(buscaCliente5) || titulo === buscaCliente5) ; 
console.log("Resultado da busca para Cliente 5:"); console.table(cliente5);
