function gerarNumerosEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
      resolve(aleatorio);
    }, tempo);
  });
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 10, 200),
    gerarNumerosEntre(1, 10, 300),
    gerarNumerosEntre(1, 10, 400),
    gerarNumerosEntre(1, 10, 500),
    gerarNumerosEntre(1, 10, 2000),
  ]);
}

// gerarNumerosEntre(1, 10, 100).then(console.log);
gerarVariosNumeros()
  .then((numeros) => console.log(numeros))
  .then(console.timeEnd("promise"));
