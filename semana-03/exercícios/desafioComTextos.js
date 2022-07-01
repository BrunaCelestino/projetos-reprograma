// # INICIO NOME LOJA: 
console.log(`                      
                                                                                 LOJA THE AGRESTE CELESTINO            
`);
//  FIM  NOME LOJA # 

//  # INICIO COMPRAS DOS CLIENTES: 
let clientes = [
        clienteLilit = [
            {produto: 'Bolsa pequena', valor: 49.0}, 
            {produto: 'Cinto preto' , valor: 22.0}, 
            {produto: 'Jaqueta Jeans', valor: 300.0}, 
            {produto: 'Calça preta', valor: 100.0}, 
            {produto: 'Blusa simples', valor: 35.0}, 
            {produto: 'Calça jeans clara', valor: 130.0}, 
            {produto: 'Blusa preta gola alta', valor: 60.0}, 
            {produto: 'Short verde canelado', valor: 80.0}, 
            {produto: 'Salto agulha 39', valor: 250.0}, 
            {produto: 'Tênis casual preto', valor: 120.0}, 
            {produto: 'meia calça transparente', valor: 30.0}],
        clienteFran = [
            {produto: 'Calça plus size', valor: 79.0}, 
            {produto: 'Vestido mid', valor: 97.0}, 
            {produto: 'Bota cano curto', valor: 400.0}, 
            {produto: 'Macacão longo', valor: 127.0}, 
            {produto: 'Pulseira feminista', valor: 10.0}, 
            {produto: 'Camiseta lisa', valor: 39.0},],
        clienteFelipe = [
            {produto: 'Calça jogger', valor: 69.0}, 
            {produto: 'Tênis skatista', valor: 144.0}, 
            {produto: 'Camisa raglan', valor: 39.0}, 
            {produto: 'Jaqueta de couro', valor: 500.0}, 
            {produto: 'Cadarço simples', valor: 5.0}, 
            {produto: 'Meia cano longo', valor: 25.0}, 
            {produto: 'Relógio de pulso preto', valor: 65.0}, 
            {produto: 'Bermuda longa', valor: 94.0}, ]

]; //  FIM COMPRAS DOS CLIENTES #

//  # INICIO LOJA: 
function loja(clientes){

//  ### INICIO CLIENTE 1:
    if(clientes == clienteFelipe){

// # INICIO SAUDAÇÃO:
        let nome = "Felipe";
        console.log(`
            Olá ${nome}! Seja bem-vinde!
            Me chamo Bruna e vou te atender hoje.
            Temos uma coleção nova, gostaria de dar uma olhada?

            Coleção Masculina:`);

        console.table({
            'calça Jogger': 'R$ 69,00',
            'calça Slim': 'R$ 78,00',
            'calça Baggie': 'R$ 125,00',
            'bermuda Slim': 'R$ 50,00',
            'bermuda Baggie': 'R$ 70,00',
            'bermuda Longa': 'R$ 94,00',
            'camisa Tradicional': 'R$ 38,00',
            'camisa Botao': 'R$ 139,00',
            'camisa Raglan': 'R$ 39,00',
            'tenis Social': 'R$ 80,00',
            'tenis Corrida': 'R$ 94,00',
            'tenis Skatista': 'R$ 144,00',
            'jaqueta Jeans': 'R$ 100,00',
            'jaqueta De Couro': 'R$ 500,00',
            'jaqueta Motoqueiro': 'R$ 600,00',
            'cadarco Simples': 'R$ 5,00',
            'cadarco Reforçado': 'R$ 10,00',
            'meia Soquete': 'R$ 7,00',
            'meia Cano Longo': 'R$ 25,00',
            'qualquer Relogio': 'R$ 65,00'
        });
        console.log(`
            Também estamos com uma super promoção, olha só:
        `);
        console.table({
            'Peças a partir de R$50,00': 'desconto de 5%',
            'Peças a partir de R$80,00': 'desconto de 10%',
            'Peças a partir de R$100,00': 'desconto de 20%',
            'Peças a partir de R$200,00': 'desconto de 50%'
        });
        console.log(`
            Os descontos não são acumulativos, mas olha só que legal:
            Se você comprar acima de 10 peças ou  se o total da compra, já com desconto, 
            for maior que R$ 800,00, você ainda recebe um cupom de desconto 
            no valor de R$ 50,00, para sua próxima compra! 
            Fique a vontade, quando precisar, é só chamar!
        `);

        console.log(`
            Algum tempo depois...
        `);
// FIM SAUDAÇÃO #

//# INICIO CALCULADORA DESCONTOS:   
        console.log(`
            Oi ${nome}, já acabou? Precisa de algo mais? Vou passar suas compras pra você e já calculo o valor com desconto, só um instantinho!
        `);

        console.log(clientes);

        let quantidadeDeItens = clientes.length;

 // - Critérios desconto:       
 var desconto = 0;

            for (let i = 0; i < quantidadeDeItens; i++) {

            // -- Maior que 50, menor que 80:     
                if(clientes[i].valor>=50 && clientes[i].valor<80){

                    var desconto1 = Number(clientes[i].valor *0.05); 
                    desconto = desconto + desconto1;
                    
                }

            // -- Maior que 80, menor que 100:
                else if(clientes[i].valor>=80 && clientes[i].valor<100){
                    var desconto2 = Number(clientes[i].valor * 0.1);
                    desconto = desconto + desconto2;
                }

            // -- Maior que 100, menor que 200: 
                else if(clientes[i].valor>=100 && clientes[i].valor<200){
                    var desconto3 = Number(clientes[i].valor * 0.2);
                    desconto = desconto + desconto3;
                }

            // -- Maior ou igual a 200:
                else if(clientes[i].valor>=200){
                    var desconto4 = Number(clientes[i].valor * 0.5);
                    desconto = desconto + desconto4;
                }
   
            }
// - Total desconto:       
        var descontoTotal = (desconto);
//  - Total sem desconto:       
        var total = clientes.map(item => item.valor).reduce((prev, next) => prev + next);
//  - Ttotal com desconto:       
        var totalComDesconto = total - descontoTotal;
        

        console.log(`
            Você comprou ${quantidadeDeItens} itens
            O seu total sem desconto foi: R$${total.toFixed(2).replace('.', ',')}
            você recebeu um desconto total de: R$${descontoTotal.toFixed(2).replace('.', ',')}
            Sua compra, com desconto, ficou no total de: R$${totalComDesconto.toFixed(2).replace('.', ',')}
        `);
// FIM CALCULADORA DESCONTOS #


//  # INICIO CHECAR CRITÉRIOS PARA CUPOM:       
            if(quantidadeDeItens>10|| totalComDesconto>800){
                console.log(`
                    Oba!! Você atingiu os requisitos necessários e ganhou o cupom de desconto no valor de R$50,00 para utilizar na sua próxima compra.
                `);
            }else{
                console.log(`
                    Aaah, que pena! Infelizmente você não atingiu os requisitos necessários para ganhar o cupom.
                `);
            }
//  FIM CHECAR CRITÉRIOS PARA CUPOM #


//  # INICIO RECIBO: 
        console.log(`
            Aqui está o seu recibo:
        `);
        console.table({
            'Quantidade de Itens':`${quantidadeDeItens}`,
            'Valor Total sem Desconto':`R$ ${total.toFixed(2).replace('.', ',')}`,
            'Desconto Recebido': `R$ ${descontoTotal.toFixed(2).replace('.', ',')}`,
            'Valor Total com Desconto':`R$ ${totalComDesconto.toFixed(2).replace('.', ',')}`
        });
//  FIM RECIBO # 


//  # INICIO GERADOR DE DATA E HORA:       
        const hoje = new Date();
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric", 
        };
        const hora = hoje.getHours();
        const minuto = hoje.getMinutes();
        const segundo = hoje.getSeconds();
        const dataLonga = hoje.toLocaleDateString("pt-BR", options);
        
        console.log(`
            Compra realizada na data de: ${dataLonga}, às ${hora}:${minuto}:${segundo}
        `); 
 //  FIM GERADOR DE DATA E HORA # 


 //  # INICIO DESPEDIDA: 
        console.log(`
            Foi um prazer atender você hoje, ${nome}! Espero te ver em breve! Até mais!
        `); 
// FIM  DESPEDIDA #

}// FIM CLIENTE 1 ###

//  ### INICIO CLIENTE 2: 
    else if(clientes == clienteLilit){
    

    // # INICIO SAUDAÇÃO:
            let nome = "Lilit";
            console.log(`
                Olá ${nome}! Seja bem-vinde!
                Me chamo Bruna e vou te atender hoje.
                Temos uma coleção nova, gostaria de dar uma olhada?
    
                Coleção Feminina:`);
    
            console.table({
                'blusa Simples': 'R$ 35,00',
                'blusa Preta Gola Alta': 'R$ 60,00',
                'camiseta Lisa': 'R$ 39,00',
                'camiseta Estampada': 'R$ 49,00',
                'calça Preta': 'R$ 100,00',
                'calça Plus Size': 'R$ 79,00',
                'calça Jeans Clara': 'R$ 130,00',
                'short Verde Canelado': 'R$ 80,00',
                'short Jeans': 'R$ 85,00',
                'vestido Mid': 'R$ 97,00',
                'jaqueta Jeans': 'R$ 300,00',
                'macacão Longo': 'R$ 127,00',
                'salto Agulha': 'R$ 250,00',
                'tenis Casual Preto': 'R$ 120,00',
                'bota Cano Curto': 'R$ 400,00',
                'bolsa Pequena': 'R$ 49,00',
                'cinto Preto': 'R$ 22,00',
                'pulseira Feminista': 'R$ 10,00',
                'meia Calça Transparente': 'R$ 30,00'
            });
            console.log(`
                Também estamos com uma super promoção, olha só:
            `);
            console.table({
                'Peças a partir de R$50,00': 'desconto de 5%',
                'Peças a partir de R$80,00': 'desconto de 10%',
                'Peças a partir de R$100,00': 'desconto de 20%',
                'Peças a partir de R$200,00': 'desconto de 50%'
            });
            console.log(`
                Os descontos não são acumulativos, mas olha só que legal:
                Se você comprar acima de 10 peças ou  se o total da compra, já com desconto, 
                for maior que R$800,00, você ainda recebe um cupom de desconto 
                no valor de R$ 50,00, para sua próxima compra! 
                Fique a vontade, quando precisar, é só chamar!
            `);
    
            console.log(`
                Algum tempo depois...
            `);
    // FIM SAUDAÇÃO #
    
    //# INICIO CALCULADORA DESCONTOS:   
            console.log(`
                Oi ${nome}, já acabou? Precisa de algo mais? Vou passar suas compras pra você e já calculo o valor com desconto, só um instantinho!
            `);
    
            console.log(clientes);
    
            let quantidadeDeItens = clientes.length;
    
// - Critérios desconto:       
var desconto = 0;          
            for (let i = 0; i < quantidadeDeItens; i++) {

            // -- Maior que 50, menor que 80:     
                if(clientes[i].valor>=50 && clientes[i].valor<80){

                    var desconto1 = Number(clientes[i].valor * 0.05);
                    desconto = desconto + desconto1;
                }

            // -- Maior que 80, menor que 100:
                else if(clientes[i].valor>=80 && clientes[i].valor<100){
                    var desconto2 = Number(clientes[i].valor * .1);
                    desconto = desconto + desconto2;
                }

            // -- Maior que 100, menor que 200: 
                else if(clientes[i].valor>=100 && clientes[i].valor<200){
                    var desconto3 = Number(clientes[i].valor * 0.2);
                    desconto = desconto + desconto3;
                }

            // -- Maior ou igual a 200:
                else if(clientes[i].valor>=200){
                    var desconto4 = Number(clientes[i].valor * 0.5);
                    desconto = desconto + desconto4;
                }
   
            }
    
    // - Total desconto:       
            var descontoTotal = (desconto);
    //  - Total sem desconto:       
            var total = clientes.map(item => item.valor).reduce((prev, next) => prev + next);
    //  - Ttotal com desconto:       
            var totalComDesconto = total - descontoTotal;
    
            console.log(`
                Você comprou ${quantidadeDeItens} itens
                O seu total sem desconto foi: R$${total.toFixed(2).replace('.', ',')}
                você recebeu um desconto total de: R$${descontoTotal.toFixed(2).replace('.', ',')}
                Sua compra, com desconto, ficou no total de: R$${totalComDesconto.toFixed(2).replace('.', ',')}
            `);
     // FIM CALCULADORA DESCONTOS #


    //  # INICIO CHECAR CRITÉRIOS PARA CUPOM:       
                if(quantidadeDeItens>10|| totalComDesconto>800){
                    console.log(`
                        Oba!! Você atingiu os requisitos necessários e ganhou o cupom de desconto no valor de R$50,00 para utilizar na sua próxima compra.
                    `);
                }else{
                    console.log(`
                        Aaah, que pena! Infelizmente você não atingiu os requisitos necessários para ganhar o cupom.
                    `);
                }
    //  FIM CHECAR CRITÉRIOS PARA CUPOM #
    
    
    //  # INICIO RECIBO: 
            console.log(`
                Aqui está o seu recibo:
            `);
            console.table({
                'Quantidade de Itens':`${quantidadeDeItens}`,
                'Valor Total sem Desconto':`R$ ${total.toFixed(2).replace('.', ',')}`,
                'Desconto Recebido': `R$ ${descontoTotal.toFixed(2).replace('.', ',')}`,
                'Valor Total com Desconto':`R$ ${totalComDesconto.toFixed(2).replace('.', ',')}`
            });
    //  FIM RECIBO # 
    
    
    //  # INICIO GERADOR DE DATA E HORA:       
            const hoje = new Date();
            const options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric", 
            };
            const hora = hoje.getHours();
            const minuto = hoje.getMinutes();
            const segundo = hoje.getSeconds();
            const dataLonga = hoje.toLocaleDateString("pt-BR", options);
            
            console.log(`
                Compra realizada na data de: ${dataLonga}, às ${hora}:${minuto}:${segundo}
            `); 
     //  FIM GERADOR DE DATA E HORA # 
    
    
     //  # INICIO DESPEDIDA: 
            console.log(`
                Foi um prazer atender você hoje, ${nome}! Espero te ver em breve! Até mais!
            `); 
    // FIM  DESPEDIDA #

    }// FIM CLIENTE 2 ###
//  ### INICIO CLIENTE 3: 
    else if(clientes == clienteFran){
    

    // # INICIO SAUDAÇÃO:
            let nome = "Fran";
            console.log(`
                Olá ${nome}! Seja bem-vinde!
                Me chamo Bruna e vou te atender hoje.
                Temos uma coleção nova, gostaria de dar uma olhada?
    
                Coleção Feminina:`);
    
            console.table({
                'blusa Simples': 'R$ 35,00',
                'blusa Preta Gola Alta': 'R$ 60,00',
                'camiseta Lisa': 'R$ 39,00',
                'camiseta Estampada': 'R$ 49,00',
                'calça Preta': 'R$ 100,00',
                'calça Plus Size': 'R$ 79,00',
                'calça Jeans Clara': 'R$ 130,00',
                'short Verde Canelado': 'R$ 80,00',
                'short Jeans': 'R$ 85,00',
                'vestido Mid': 'R$ 97,00',
                'jaqueta Jeans': 'R$ 300,00',
                'macacão Longo': 'R$ 127,00',
                'salto Agulha': 'R$ 250,00',
                'tenis Casual Preto': 'R$ 120,00',
                'bota Cano Curto': 'R$ 400,00',
                'bolsa Pequena': 'R$ 49,00',
                'cinto Preto': 'R$ 22,00',
                'pulseira Feminista': 'R$ 10,00',
                'meia Calça Transparente': 'R$ 30,00'
            });
            console.log(`
                Também estamos com uma super promoção, olha só:
            `);
            console.table({
                'Peças a partir de R$50,00': 'desconto de 5%',
                'Peças a partir de R$80,00': 'desconto de 10%',
                'Peças a partir de R$100,00': 'desconto de 20%',
                'Peças a partir de R$200,00': 'desconto de 50%'
            });
            console.log(`
                Os descontos não são acumulativos, mas olha só que legal:
                Se você comprar acima de 10 peças ou  se o total da compra, já com desconto, 
                for maior que R$800,00, você ainda recebe um cupom de desconto 
                no valor de R$ 50,00, para sua próxima compra! 
                Fique a vontade, quando precisar, é só chamar!
            `);
    
            console.log(`
                Algum tempo depois...
            `);
    // FIM SAUDAÇÃO #
    
    //# INICIO CALCULADORA DESCONTOS:   
            console.log(`
                Oi ${nome}, já acabou? Precisa de algo mais? Vou passar suas compras pra você e já calculo o valor com desconto, só um instantinho!
            `);
    
            console.log(clientes);
    
            let quantidadeDeItens = clientes.length;
    
// - Critérios desconto:
var desconto = 0                
            for (let i = 0; i < quantidadeDeItens; i++) {

            // -- Maior que 50, menor que 80:     
                if(clientes[i].valor>=50 && clientes[i].valor<80){

                    var desconto1 = Number(clientes[i].valor * 0.05);
                    desconto = desconto + desconto1; 
                }

            // -- Maior que 80, menor que 100:
                else if(clientes[i].valor>=80 && clientes[i].valor<100){
                    var desconto2 = Number(clientes[i].valor * 0.1);
                    desconto = desconto + desconto2;
                }

            // -- Maior que 100, menor que 200: 
                else if(clientes[i].valor>=100 && clientes[i].valor<200){
                    var desconto3 = Number(clientes[i].valor * 0.2);
                    desconto = desconto + desconto3;
                }

            // -- Maior ou igual a 200:
                else if(clientes[i].valor>=200){
                    var desconto4 = Number(clientes[i].valor * 0.5);
                    desconto = desconto + desconto4;
                }
   
            }
    // - Total desconto:       
            var descontoTotal = (desconto);
    //  - Total sem desconto:       
            var total = clientes.map(item => item.valor).reduce((prev, next) => prev + next);
    //  - Ttotal com desconto:       
            var totalComDesconto = total - descontoTotal;
    
            console.log(`
                Você comprou ${quantidadeDeItens} itens
                O seu total sem desconto foi: R$${total.toFixed(2).replace('.', ',')}
                você recebeu um desconto total de: R$${descontoTotal.toFixed(2).replace('.', ',')}
                Sua compra, com desconto, ficou no total de: R$${totalComDesconto.toFixed(2).replace('.', ',')}
            `);
    // FIM CALCULADORA DESCONTOS # 


    //  # INICIO CHECAR CRITÉRIOS PARA CUPOM:       
                if(quantidadeDeItens>10|| totalComDesconto>800){
                    console.log(`
                        Oba!! Você atingiu os requisitos necessários e ganhou o cupom de desconto no valor de R$50,00 para utilizar na sua próxima compra.
                    `);
                }else{
                    console.log(`
                        Aaah, que pena! Infelizmente você não atingiu os requisitos necessários para ganhar o cupom.
                    `);
                }
    //  FIM CHECAR CRITÉRIOS PARA CUPOM #
    
    
    //  # INICIO RECIBO: 
            console.log(`
                Aqui está o seu recibo:
            `);
            console.table({
                'Quantidade de Itens':`${quantidadeDeItens}`,
                'Valor Total sem Desconto':`R$ ${total.toFixed(2).replace('.', ',')}`,
                'Desconto Recebido': `R$ ${descontoTotal.toFixed(2).replace('.', ',')}`,
                'Valor Total com Desconto':`R$ ${totalComDesconto.toFixed(2).replace('.', ',')}`
            });
    //  FIM RECIBO # 
    
    
    //  # INICIO GERADOR DE DATA E HORA:       
            const hoje = new Date();
            const options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric", 
            };

            const hora = hoje.getHours();
            const minuto = hoje.getMinutes();
            const segundo = hoje.getSeconds();
            const dataLonga = hoje.toLocaleDateString("pt-BR", options);
            
            console.log(`
                Compra realizada na data de: ${dataLonga}, às ${hora}:${minuto}:${segundo}
            `); 
     //  FIM GERADOR DE DATA E HORA # 
    
    
     //  # INICIO DESPEDIDA: 
            console.log(`
                Foi um prazer atender você hoje, ${nome}! Espero te ver em breve! Até mais!
            `); 
    // FIM  DESPEDIDA #

    } // FIM CLIENTE 3 ###

}//  FIM LOJA #


// # TESTAR CLIENTES:
loja(clienteFelipe)
loja(clienteLilit)
loja(clienteFran)