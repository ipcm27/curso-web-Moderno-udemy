const alunos = [
  { nome: "Carlos", nota: 7.3, vestibulando: true },
  { nome: "Andre", nota: 9.2, vestibulando: false },
  { nome: "Sayumi", nota: 9.8, vestibulando: false },
  { nome: "Fatima", nota: 8.7, vestibulando: false },
];
let newArray = [];

// desafio 1 : todos os alunos são vestibulandos? (com reduce)

const myMap = alunos.map((a) => a.vestibulando);
console.log(myMap);

const myReduce = myMap.reduce((acc, crr) => acc + crr);
console.log(myReduce);

//ou

const contarVestibulando = alunos
  .map((a) => a.vestibulando)
  .reduce(function (acumulador, atual) {
    return acumulador + atual;
  });

const contarAlunos = alunos
  .map((a) => +1)
  .reduce(function (acumulador, atual) {
    return acumulador + atual;
  });

const verificar =
  contarAlunos == contarVestibulando
    ? "Todos são vestibulando"
    : "Algum ou nenhum é vestibulando";

console.log(verificar);

// desafio 2 : Algum aluno é vestibulando ? (com reduce)

const verificarVestibulandos =
  contarVestibulando != 0 ? "existem vestibulandos" : "não há vestibulandos";

console.log(verificarVestibulandos);

//Resposta

//1
const todosVestibulandos = (resultado, vestibulando) =>
  resultado && vestibulando;
console.log(alunos.map((a) => a.vestibulando).reduce(todosVestibulandos));

//2
const algumVestibulando = (resultado, vestibulando) =>
  resultado || vestibulando;
console.log(alunos.map((a) => a.vestibulando).reduce(algumVestibulando));

//Muito mais simples PQP!
