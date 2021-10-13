function receberNomeDoMes(numero) {
  const mapeamento = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return console.log(mapeamento[--numero]);
}

receberNomeDoMes(1);
