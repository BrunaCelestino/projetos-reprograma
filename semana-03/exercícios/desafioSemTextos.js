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
    ]


    function fazerCompras(clientes){

        //# INÍCIO CALCULADORA DESCONTOS
        let quantidadeDeItens = clientes.length;
        let desconto = 0;
        
                    for (let i = 0; i < quantidadeDeItens; i++) {
        
                    // -- Maior que 50, menor que 80:     
                        if(clientes[i].valor>=50 && clientes[i].valor<80){
        
                            let desconto1 = Number(clientes[i].valor *0.05); 
                            desconto = desconto + desconto1;
                            
                        }
        
                    // -- Maior que 80, menor que 100:
                        else if(clientes[i].valor>=80 && clientes[i].valor<100){
                            let desconto2 = Number(clientes[i].valor * 0.1);
                            desconto = desconto + desconto2;
                        }
        
                    // -- Maior que 100, menor que 200: 
                        else if(clientes[i].valor>=100 && clientes[i].valor<200){
                            let desconto3 = Number(clientes[i].valor * 0.2);
                            desconto = desconto + desconto3;
                        }
        
                    // -- Maior ou igual a 200:
                        else if(clientes[i].valor>=200){
                            let desconto4 = Number(clientes[i].valor * 0.5);
                            desconto = desconto + desconto4;
                        }
           
                    }
        // - Total desconto:       
                let descontoTotal = (desconto);
        //  - Total sem desconto:       
                let total = clientes.map(item => item.valor).reduce((prev, next) => prev + next);
        //  - Ttotal com desconto:       
                let totalComDesconto = total - descontoTotal;

        // FIM CALCULADORA DESCONTOS #
        
        
        //  # INICIO RECIBO: 
                const recibo = {
                    'Quantidade de Itens':`${quantidadeDeItens}`,
                    'Valor Total sem Desconto':`R$ ${total.toFixed(2).replace('.', ',')}`,
                    'Desconto Recebido': `R$ ${descontoTotal.toFixed(2).replace('.', ',')}`,
                    'Valor Total com Desconto':`R$ ${totalComDesconto.toFixed(2).replace('.', ',')}`
                };
        //  FIM RECIBO # 

         //  # INICIO CHECAR CRITÉRIOS PARA CUPOM:       
         if(quantidadeDeItens>10|| totalComDesconto>800){
            console.table({
                ...recibo,
            
                "Bônus": "Cupom desconto no valor de R$50,00 para utilizar em sua próxima compra."
            })
        }else{
            console.table(recibo)
        }
        //  FIM CHECAR CRITÉRIOS PARA CUPOM #       
        
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
}



fazerCompras(clienteLilit)
