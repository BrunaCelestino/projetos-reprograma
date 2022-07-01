# <div align = "center" > ON15-TodasEmTech-S3-Lógica de Programação-II </div>

<div align = "justify">
Esta é a 3ª semana da turma online Todas em Tech on15 - Back-end, nesta aula do dia 09/04/2022 tivemos os seguintes conteúdos:

</div>
- Revisão da estruturas condicionais;
- Estruturas de repetição;
- Escopo;
- Funções;
- Objetos;

## TAREFA

<div align = "justify">

No dia 09 de abril de 2022, tivemos uma aula  sobre revisão das estruturas condicionais, estruturas de repetição, escopo, funções e objetos. Como exercício da semana, tivemos o exercício a seguir.
É  possível encontrar a resolução do exercício clicando: [exercício-versão-1](https://github.com/BrunaCelestino/ON15-TET-S3-LP-II/blob/BrunaCelestino/desafio%20-%20Bruna%20Celestino/desafioComTextos.js) e [exercicio-versão-2](https://github.com/BrunaCelestino/ON15-TET-S3-LP-II/blob/BrunaCelestino/desafio%20-%20Bruna%20Celestino/desafioSemTextos.js).

<br>

</div>
<br>
<div align = "justify">

## Exercício: 

#### Crie uma aplicação para uma loja de roupas que deseja realizar um super programa de descontos: 
  
1. Regras de negócio:
  - Peças a partir de R$50,00  - desconto de 5%
  - Peças a partir de R$80,00  - desconto de 10%
  - Peças a partir de R$100,00 - desconto de 20%
  - Peças a partir de R$200,00 - desconto de 50%
  - No caso de uma cliente comprar acima de 10 peças ou o total da compra com descontos for maior que R$800,00 ela recebe ainda um cupom de R$50,00 para sua próxima compra, esta informação deve ser retornada junto ao valor final da compra;  

2. Critérios de aceite:
  - Crie uma função que calcule a compra das clientes e aplique toda a lógica necessária;
  - O retorno deve ser o valor total (soma dos valores dos produtos), desconto aplicado e valor final (valor total - descontos) e a informação do cupom ganho, caso se aplique;
  - Como DESAFIO EXTRA o retorno pode conter também Data e Hora da compra;
  - A simulação do seu código deve atender 3 clientes, uma delas é a Lilit que realizou a seguinte compra:
    
  ```js

    let clienteLilit = [
      {produto: 'Bolsa pequena', valor: 49.0}, 
      {produto: 'Cinto preto', valor: 22.0}, 
      {produto: 'Jaqueta Jeans', valor: 300.0}, 
      {produto: 'Calça preta', valor: 100.0}, 
      {produto: 'Blusa simples', valor: 35.0}, 
      {produto: 'Calça jeans clara', valor: 130.0}, 
      {produto: 'Blusa preta gola alta', valor: 60.0}, 
      {produto: 'Short verde canelado', valor: 80.0}, 
      {produto: 'Salto agulha 39', valor: 250.0}, 
      {produto: 'Tênis casual preto', valor: 120.0}, 
      {produto: 'meia calça transparente', valor: 30.0}]
      
  ```
     
  - As outras duas clientes devem ser criadas por vocês e seguir o modelo de dados usado na clienteLilit, a quantidade de itens comprados fica ao seu critério;
  
3. Dicas para a execução do exercício:
  - Observe que este exercício aplica os conceitos aprendidos até agora de função, estrutura de repetição, estrutura condicional, operadores, variáveis e lógica;
  - Observe também que a variável cliente é uma lista de dados (Array), que apesar de nao termos estudado à fundo, já sabemos como iterar (percorrer cada elemento) através do `for` ou `for... of` (estejam livres para usar outros tipos de métodos de iteração caso queiram);
  - Uma função que recebe uma array como argumento resolve muito bem esse problema, certo?

---