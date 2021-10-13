function doContra(param) {
  if (typeof param == "number") {
    param = param * -1;
  } else if (typeof param == "boolean") {
    param == true ? (param = false) : (param = true);
  } else {
    return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof param}`;
  }
  console.log(param);
}

doContra("vbn");

function inverso(valor) {
  const tipo = typeof valor;
  if (tipo == "boolean") return !valor;
  else if (tipo == "number") return -valor;
  else return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`;
}
