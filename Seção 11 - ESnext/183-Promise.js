// Um recurso usado qunado você quer ter um processamente assíncrono.
// possui 2 grandes destinos: Resolvida ou rejeitada.

// Você quer acessar um arquivo remoto. Uma API. Você passa uma callback de êxito e uma callback de fracasso.
// Caso o arquivo seja obtida, a callback de êxito é chamada, caso contrário, a outra.

function falarDepois(segundos, frase) {
  return new Promise((resolve, reject) => {
    //          ^        ^
    //       Objeto      Prâmetros de uma função callback - anônima tipo arrow
    setTimeout(() => {
      resolve(frase);
      //         ^
      //       aceita apenas um único parâmetro
    }, segundos * 1000);
  });
}

falarDepois(3, "OOOOLLAAA")
  .then((frase) => frase.concat("!!!!"))
  .then((outraFrase) => console.log(outraFrase))
  .catch((e) => console.log(e));
// ^ pra acessar o resultado de uma função asinc atendida de forma correta eu chamo o then
// o ctach é chamado sempre que acontecer algum tipo de erro
