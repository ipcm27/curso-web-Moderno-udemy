//Formas diferentes de chamar -executar- uma função

function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "ipad",
  preco: 4500,
  desc: 0.15,
  getPreco,
};

global.Preco = 20;
global.desc = 0.1;
// chamar funcao de forma direta:
console.log(getPreco());
// chamar uma funcáo através de um objeto
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.2 };

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

//por tras dos panos
console.log(getPreco.call(carro, 0.2, "$"));
console.log(getPreco.apply(carro, [0.2, "$"]));
