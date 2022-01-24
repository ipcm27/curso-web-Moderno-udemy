//TRATANDO ERROS
function gerarErroOuNao(valor, chanceDeErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceDeErro) {
      reject("ocorreu um erro");
    } else {
      resolve(valor + 10);
    }
  });
}

gerarErroOuNao(20, 0.1)
  .then((value) => console.log(value))
  .catch((erro) => console.log(erro));
