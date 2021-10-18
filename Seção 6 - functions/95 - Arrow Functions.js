// EC6 2015- introduzida as funções arrow, que são boa sproque:
//  1) mais curtas, sintaxe mais reduzida - func'ões especialista respeitando single responsibility principle
//  2) this associados ao contexto que a funçao foi escrita

// NORMAL
let dobro = function (a) {
  return 2 * a;
};

// ARROW
let dobro = (a) => {
  return 2 * a;
};

// Arrow com 1 parâmetro apenas
let dobro = (a) => 2 * a;

//arrow em funções de alta órdem:
const nums = [1, 2, 3, 4, 5];

// com arrow
let resultado = nums.map((a) => 2 * a);

// sem arrow
let resultado2 = nums.map(function (a) {
  return 2 * a;
});
