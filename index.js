class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    atacar() {
      let ataque = this.obterAtaque();
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  
    obterAtaque() {
      switch (this.tipo) {
        case 'mago':
          return 'magia';
        case 'guerreiro':
          return 'espada';
        case 'monge':
          return 'artes marciais';
        case 'ninja':
          return 'shurikens';
        default:
          return 'ataque indefinido';
      }
    }
  }

  const heroi1 = new Heroi('Gandalf', 1000, 'mago');
  heroi1.atacar(); 
  
  const heroi2 = new Heroi('Aragorn', 35, 'guerreiro');
  heroi2.atacar();
  
  const heroi3 = new Heroi('Bruce Lee', 80, 'monge');
  heroi3.atacar(); 
  
  const heroi4 = new Heroi('Hanzo', 25, 'ninja');
  heroi4.atacar();
