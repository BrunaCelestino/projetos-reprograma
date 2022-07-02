# <div align = "center" > # On15-TodasEmTech-s7-JS-Assíncrono </div>

<div align = "justify">
Esta é a 7ª semana da turma online: Todas em Tech on15 - Back-end, nesta aula do dia 25/09/2021 tivemos os seguintes conteúdos:

- Ciclo de vida de uma aplicação JavaScript;
  - setTimeout();
  - Event Loop;
- callbacks;
- Promises;
- async/await;
  - try/catch
</div>

## PROJETO

<div align = "justify">

Na semana 7, aprendemos sobre o Ciclo de vida de uma aplicação JavaScript, setTimeout, event loop, callbacks, promises, async/await e try/catch. Como exercício da semana, tivemos as atividades a seguir.
É  possível encontrar a resolução do exercícios clicando:  
 
- [exercício-1-versão-1](https://github.com/BrunaCelestino/ON15-TET-S7-ASSINCJS/blob/BrunaCelestino/exercicio1-async.js);
- [exercício-1-versão-2](https://github.com/BrunaCelestino/ON15-TET-S7-ASSINCJS/blob/BrunaCelestino/exercicio1-callback.js); 
- [exercício-1-versão-3](https://github.com/BrunaCelestino/ON15-TET-S7-ASSINCJS/blob/BrunaCelestino/exercicio1-promise.js);
- [exercício-2](https://github.com/BrunaCelestino/ON15-TET-S7-ASSINCJS/blob/BrunaCelestino/exercicio2-async.js)
<br>

</div>
<br>

<div align = "justify">

## Exercícios: 

1. Precisamos calcular o valor da parcela de uma Lace de cabelo humano que a Byanka Nicoli decidiu comprar, para isso precisamos descobrir o preço do produto e em seguida o número de parcelas desejadas, a partir das funções a seguir, utilize qualquer uma das ferramentas aprendidas nesta aula para resolver o código assíncrono e obter o seguinte retorno no console: `Sua Lace custa R$3900,00 e você pagará em 10x de R$390,00`

```js
// função que simula busca num banco que retorna o preço do produto:

function buscarPreco(produto) {
  setTimeout(() => {
    if (produto === "hormonios") {
      return {
        nome: "Hormônios",
        preco: 99.00
      }
    } else if (produto === "unhas gel") {
      return {
        nome: "Unhas em Gel",
        preco: 190.00
      }
    } else if (produto === "lace"){
      return {
        nome: "Lace",
        preco: 3900.00
      }
    } else {
      return "Produto não encontrado"
    }
  }, 2000)
}

// função que simula busca num banco que retorna o valor das parcelas:

function calcularParcela(preco) {
  let parcelasDesejadas = 10
  setTimeout(() => {
    return preco * parcelasDesejadas
  }, 2000)
}
```

2. Resolva usando async/await: 
  Você quer saber quanto vai pagar em reais por um produto comprado nos EUA e para isso precisa consultar numa "API" de cotação para descobrir o valor do Dólar no momento da compra (você deve usar o valor do dólar comercial) e calcular o valor em Real, em seguida precisa consultar outra "API" que retorna o valor de dois juros que serão cobrados sob o preço em Real e retornar o valor final no console: `O preço final do seu produto é R$****,**`

  dados:
  `const precoEmDolar = 1270  //preço em dólar`
  
```js
function buscarPrecoDolar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        comercial: "5.03",
        turismo: "5.17",
      });
    }, 1000);
  });
}

function buscarJurosImportacao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        juros1: 0.06,
        juros2: 0.11,
        message:
        "os dois juros são aplicados no valor total do produto em real",
      });
    }, 1000);
  });
}

async function calcularValorEmReal(precoEmDolar) {
  try {} 
  catch (error) {}
}
```

---

</div>