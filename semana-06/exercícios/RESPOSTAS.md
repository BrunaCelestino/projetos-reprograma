# Respostas
1) O nível 2 é correspondente ao CRUD porque nesse nível é possível fazer um uso eficiente dos URIs e verbos HTTP. 

2) O estilo de arquitetura REST é baseado no protocolo HTTP, sendo seus verbos: POST, GET, PUT, DELETE. 
Já o CRUD é formado pelos termos: CREAT, READ, UPDATE, DELETE.

Create -> POST
O verbo POST é relacionado ao CRUD Create (criar).

Read -> GET
O verbo GET normalmente é relacionado ao CRUD Read, por se tratar de leitura.

Update -> PUT
O verbo PUT é associado ao CRUD Update, pois ambos atualizam. 

Delete -> DELETE 
O verbo DELETE é associado ao CRUD Delete, excluir. 

3) HATEOAS é o acrônimo para "Hypermedia as the Engine of Application State". De acordo com o modelo de maturidade de Richardson, o HATEOAS é considerado o último nível de uma API RESTful.
Uma API que implementa esse nível fornece aos seus clientes links que indicarão como poderá ser feita a navegação entre seus recursos. Embora não seja obrigatório, caso esteja procurando definir uma API que siga o padrão RESTful, o HATEOAS deve ser implementado nela.

4) A idempotência é a propriedade que algumas operações têm de poderem ser aplicadas várias vezes sem que o valor do resultado se altere após a aplicação inicial.
Quando se diz que uma API é idempotente, isso significa que seus métodos podem ser usados diversas vezes, e o resultado de sua requisição é sempre o mesmo, independentemente de quantas vezes foi executada. 

5) O método PATCH aplica modificações parciais a um recurso. O método PUT permite apenas substituições completas de um documento. Diferentemente do método PUT, o método PATCH não é idempotente, ou seja, requisições sucessivas idênticas podem obter efeitos diferentes. 