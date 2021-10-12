const notas = [7.7, 5.5, 3.7, 10];

for (let i in notas) {
  console.log(i, notas[i]);
}

const pessoa = {
  nome: "michael",
  sobrenome: "Scott",
  idade: 43,
  peso: 82,
};

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}
