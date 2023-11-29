class Heroi {

  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shurikens';
        break;
      default:
        ataque = 'ataque desconhecido';
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

const Heroi1 = new Heroi('Aragorn', 30, 'guerreiro');
Heroi1.atacar();

const Heroi2 = new Heroi('Gandalf', 150, 'mago');
Heroi2.atacar();

const Heroi3 = new Heroi('Zelda', 700, 'guerreiro');
Heroi3.atacar();