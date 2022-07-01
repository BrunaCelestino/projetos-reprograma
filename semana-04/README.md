# <div align = "center" > ON15-TodasEmTech-S4-Lógica de Programação-III </div>

<div align = "justify">
Esta é a 4ª semana da turma online Todas em Tech on15 - Back-end, nesta aula do dia 16/04/2022 tivemos os seguintes conteúdos:
</div>

- Revisão de objetos;
- Arrays;
- Métodos de Arrays;
- Spread/rest;

## TAREFA

<div align = "justify">

No dia 16 de abril de 2022, tivemos uma aula  sobre revisão de objetos, arrays, métodos de arrays, spread e rest. Como exercício da semana, tivemos as atividades a seguir.
É  possível encontrar a resolução do exercício clicando: [exercício-1](https://github.com/BrunaCelestino/ON15-TET-S4-LP-III/tree/BrunaCelestino/desafio%20-%20Bruna%20Celestino/desafio-5.1) e [exercicio-2](https://github.com/BrunaCelestino/ON15-TET-S4-LP-III/tree/BrunaCelestino/desafio%20-%20Bruna%20Celestino/desafio-5.2).

<br>

</div>
<br>

<div align = "justify">

## Exercício: 

 1. Refaça o exercício da semana passada trocando o método utilizado para um que utiliza pelo menos 3 dos métodos aprendidos na aula de hoje! Nesta semana incluir a a data e hora da compra faz parte do retorno esperado para a entrega do exercício;

2. Crie uma aplicação simples que faça uma busca no nosso banco de dados fake (let data) pelo nome do filme (retorno único) ou gênero (retorno em lista) fornecido pela cliente, enviar como resposta para cada filme encontrado um objeto com título, gênero e ano de lançamento;

```js 
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

  busca cliente1 = "Suspense";
  busca cliente2 = "Corpo Elétrico"
  busca cliente3 = "Homem-Aranha: Sem Volta para Casa"
  busca cliente4 = "sci-fi" 
  busca cliente5 = "romance"

```