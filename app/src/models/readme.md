#todos os modulos são inseridos aqui dentro do models;

1) classes precisam de metodos construtores;

2) os atributos de uma classe são inacessiveis fora da classe. Por isso precisamos criar metodos "get" que retornarão os valores desejados;


[regrasDeNegocio]

-> não pode ser modificada depois de criada;
-> obrigatoriamente tem que ter uma quantidade, valor e data;
-> seu volume é calculado multiplicando-se a quantidade negociada pelo valor negociado;


[comoFuncionará]

--> todo arquivo typescript será convertido para js para que o navegador possa interpreta-lo;

--> todo arquivo typescript interpretado gerará uma copia em js dentro da pagina dist, e todo arquivo ts deve estar dentro da pasta APP;


[modificadores]

--> public pode ser omitido;
--> private deve ser adicionado a frente do atributo da classe mesmo com o underline;