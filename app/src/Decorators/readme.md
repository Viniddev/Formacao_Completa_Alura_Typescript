# Target: 
    Se o decorator for colocado em uma classe estatica, ele retorna o construtor da classe. caso contrário ele retorna o prototype daquela classe.

# PropertyKey:
    Retorna o nome do metodo que foi "Decorado" para que possamos entender e identifica-lo

# Descriptor: 
    Esse item tem uma referência ao metodo original o qual estamos decorando;

# @domInjector
    Esse decorator foi criado para simplificar o processo de buscar elementos do html sem precisar ficar escrevendo document.querySelector() e etc;

    Por meio dele podemos usar a propriedade dos decorators passando como parâmetro apenas o identificador do html sem se preocupar com o processo de busca

    Usamos o Object.definePorperty para transformar o nosso objeto em um metodo get que será interpretado assim que o código e a classe for definida