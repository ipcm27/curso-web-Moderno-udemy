const diferenciarMaior = (num1, num2) => {
  if (num1 == num2) {
    console.log("numeros iguais");
  } else {
    num1 > num2
      ? console.log("o numero 1 é o maior")
      : console.log("o numero 2 é o maior");
  }
};

diferenciarMaior("18", 18);

function maiorIgual(primeiro, segundo) {
  if (typeof primeiro != segundo) return false;
  return primeiro >= segundo;
}

maiorIgual(20, 20);
