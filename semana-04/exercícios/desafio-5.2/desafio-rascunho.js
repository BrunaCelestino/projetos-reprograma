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


function procurarFilmes(pesquisa){
    
    if(typeof(pesquisa) == "string"){
    
        
        const pesquisar = data.filter(({genero}) => [genero].flat().includes(pesquisa.toLowerCase())); 
        pesquisa = pesquisa.includes(pesquisa)

        console.log("Resultado da busca:"); console.table(pesquisar);

    

    } else if(typeof(pesquisa) != "string"){
        console.log("Pesquisa inválida! Digite um dado válido.")

    }}

procurarFilmes("drama")

