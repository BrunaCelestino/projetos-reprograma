// 5.1. Refaça o exercício da semana passada trocando o método utilizado para um que utiliza 
// pelo menos 3 dos métodos aprendidos na aula de hoje! Nesta semana incluir a a data e hora 
// da compra faz parte do retorno esperado para a entrega do exercício;

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

//# INÍCIO CALCULADORA DESCONTOS
    const chamarDesconto = ( valor ) => {
        if(valor>=50 && valor<80){
            return Number(valor * 0.05)
        }
        if(valor>=80 && valor<100){
            return Number(valor * 0.1)
        }
        if(valor>=100 && valor<200){
            return Number(valor * 0.2)
        }
        if(valor>=200){
            return Number(valor *0.5)
        } else {
          return 0
        }
        
    }
// FIM CALCULADORA DESCONTOS #

    function fazerCompras(clientes){


        let quantidadeDeItens = clientes.length;
        let desconto = 0;
        clientes.forEach(item => {
            desconto += chamarDesconto(item.valor)
        });
        
        // - Total desconto:       
        let descontoTotal = (desconto);
        //  - Total sem desconto:       
        let total = clientes.map(item => item.valor).reduce((prev, next) => prev + next);
        //  - Ttotal com desconto:       
        let totalComDesconto = total - descontoTotal;
        
        
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
            
                "Bônus": "Cupom de desconto no valor de R$50,00 para utilizar em sua próxima compra."
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
        const hourOptions ={
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        }
        
        const dataLonga = hoje.toLocaleDateString("pt-BR", options);
        const hora = hoje.toLocaleTimeString("pt-BR",hourOptions);
        
        console.log(`
            Compra realizada na data de: ${dataLonga}, às ${hora}.
        `); 
         //  FIM GERADOR DE DATA E HORA # 
}

function chamarClientes (){
    clientes.forEach(cliente => {
        fazerCompras(cliente)
    });
}


chamarClientes()