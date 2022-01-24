const primeiraLetra = (string) => string[0];
const letraMinuscula = (letra) => letra.toLowerCase();

let p = new Promise(function (comprirPromessa) {
  comprirPromessa(["Ana", "Bia", "Carlos", "Daniel"]);
});

p.then((valor) => valor[0])
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log);
