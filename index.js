// Definindo a classe Heroi
class Heroi {
    // Construtor da classe com as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método de ataque
    atacar() {
      
    // Utilizando uma estrutura de decisão para determinar o tipo de ataque com base no tipo do herói
      
    let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque indefinido";
      }
  
 // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
// Exemplo de uso da classe

  const heroi1 = new Heroi("Jonas", 27, "guerreiro");
  heroi1.atacar(); 

  
  const heroi2 = new Heroi("Gandalf", 150, "mago");
  heroi2.atacar(); 
  
