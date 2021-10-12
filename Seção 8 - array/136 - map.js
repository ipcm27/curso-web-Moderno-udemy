//MAP - SEXTA-FEIRA 8 OUT 2021

// diferenca entre um for each e um map:
// for each aplica a funcao para cad aitem do array original (modificando o array original)
// map modifica cada item do array original e retorna um novo array, deixando o original intacto

const nums = [1, 2, 3, 4];

const duplicados = nums.map(function (e) {
  return e * 2;
});

const duplicar = (e) => e * 2;
const duplicados2 = nums.map(duplicar);

console.log(duplicados);
// --------------------------------------------

// funcoes callback para uma map
const somar10 = (e) => e + 10;
const triplicar = (e) => e * 3;
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

dinheiros = nums.map(somar10).map(triplicar).map(paraDinheiro);
console.log(dinheiros);

// --------------------------------------------

const carrinho = [
  `{"nome": "Lápis", "preco": 3.45}`,
  `{"nome": "caderno", "preco": 18.99}`,
  `{"nome": "Kit Lápis", "preco": 30.00}`,
  `{"nome": "caneta", "preco": 7.50}`,
];

console.log(carrinho);

//tratando a informação
const transformarObjeto = function (json) {
  objTransformados = JSON.parse(json);
  return objTransformados;
};

const transformarObjetoArrow = (json) => JSON.parse(json);
// transformando em arrow
// lê-se : eu vou criar uma constante x que vai receber um json e vai retornar um json.parse()

// criando a funcao callback do map
const deixarPrecoApenas = (linha) => linha.preco;

//criando o map
const precos = carrinho.map(transformarObjetoArrow).map(deixarPrecoApenas);
console.log(precos);

// --------------------------------------------

// implementação do map

Array.prototype.mapModificado = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};
