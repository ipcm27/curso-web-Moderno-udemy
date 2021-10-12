// FILTER - SÁBADO 09/10/2021 19:52

const produtos = [
  { nome: "Ipad", preco: 4999, fragil: true },
  { nome: "celular", preco: 1500, fragil: true },
  { nome: "computador", preco: 2500, fragil: true },
  { nome: "mesa", preco: 700, fragil: false },
];

const isFragil = produtos.filter(function (p) {
  return p.fragil == true;
});
const maiorQue1000 = produtos.filter((p) => p.preco > 1000);

console.log(isFragil);
console.log(maiorQue1000);

// --------------------------------------------
// outra opção é criar os callbacks
const caro = (produtos) => produtos.preco >= 4000;
const fragil = (produtos) => produtos.fragil;
// depois aplicar os filters
console.log(produtos.filter(caro).filter(fragil));
// --------------------------------------------

//IMPLEMENTAÇÃO DO FILTER
Array.prototype.filter2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
};
