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


function procurarFilmes(pesquisa){
    
    if(typeof(pesquisa) == "string"){

        const pesquisarTitulo = data.filter(({titulo}) => titulo.toLowerCase().includes(pesquisa.toLowerCase()));
        const pesquisarGenero = data.filter(({genero}) => genero.includes(pesquisa.toLowerCase()));


        if(pesquisarGenero == 0 && pesquisarTitulo != 0){

            console.log("Resultado da busca por título:"); console.table(pesquisarTitulo);
            console.log("Resultado da busca por gênero: não encontrado");
            
        }else if (pesquisarTitulo == 0 && pesquisarGenero != 0){

            console.log("Resultado da busca por título: não encontrado");
            console.log("Resultado da busca por gênero:"); console.table(pesquisarGenero);

        }else if(pesquisarTitulo != 0 && pesquisarGenero!= 0){

            console.log("Resultado da busca por título:"); console.table(pesquisarTitulo);
            console.log("Resultado da busca por gênero:"); console.table(pesquisarGenero);

        }else{

            console.log("Não foi possível encontrar resultados com o dado pesquisado.")
        };
        
    } else if(typeof(pesquisa) != "string"){
        console.log("Pesquisa inválida! Digite um dado válido.");
    }
}

procurarFilmes("susp")

