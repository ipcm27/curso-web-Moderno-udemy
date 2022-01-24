// o awayt so pode ser feito  dentro de uma async function
// sob uma variável que está esperando uma funçao que retorna uma promise

// Gabi me prometeu fazer 10 bolos pro meu aniversário
// porém se ela tiver doente não faz.
// De todo jeito eu vou ter uma festa

function fazerBoloNiver(isGabiSick) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isGabiSick) {
        resolve(10);
      } else {
        reject(new Error());
      }
    }, 2000);
  });
}

// fazerBoloNiver(true)
//   .then((result) => {
//     console.log(`Gabi me fez ${result} bolos :))`);
//   })
//   .catch((error) => {
//     console.log("Gabi dodoi :(");
//   })
//   .finally(() => {
//     console.log("Vamo fazer festa com ou sem bolo");
//   });

async function fazerNiver(isGabiDoente) {
  let bolo = await fazerBoloNiver(isGabiDoente);

  //   try{}
  return console.log(
    `Estou fazendo minha festa com ${bolo} bolos que a Gabi me fez`
  );
  //   catch(e){throw}
}

// fazerNiver(false);
