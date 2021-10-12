// REDUCE- SÁBADO 09/10/2021 20:08

// Transforma o array em um único elemento

const alunos = [
  { nome: "Carlos", nota: 7.3, bolsista: false },
  { nome: "Andre", nota: 9.2, bolsista: true },
  { nome: "Sayumi", nota: 9.8, bolsista: false },
  { nome: "Fatima", nota: 8.7, bolsista: true },
];

// primeiro mapeei pra aparecer somente a nota depois chamei o reduce
// e disse a regra do callback do reduce

const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    console.log(` ACC = ${acumulador} / ATUAL= ${atual} `);
    return acumulador + atual;
  }, 0);

console.log(resultado);

//Implementação

Array.prototype.reduce2 = function (callback) {
  let acumulador = this[0];
  for (let i = 0; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};
