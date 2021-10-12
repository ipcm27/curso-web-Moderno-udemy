//FUNÇÃO FACTORY
// funcoes construtoras - basciamente
// funcao que retorna um objeto

function criarPessoaComAtributosFixos() {
  return {
    nome: "ana",
    sobrenome: "silva",
  };
}

criarPessoaComAtributosFixos();
console.log(criarPessoaComAtributosFixos());

function criarProduto(nome, preço) {
  return {
    nome,
    preço,
    desconto: `${10}%`,
  };
}

criarProduto("ventilador", 100);
console.log(criarProduto("ventilador", 100));

//CLASSES VS FUNÇÃO FACTORY

//classe
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("João");
p1.falar();



const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`meu nome é ${nome}`),
  };
};
//por conta do contexto lexico ele carrega consigo o nome sem precisar usar o this

const p2 = criarPessoa("Shirley");
p2.falar();
