function estaEntre(minimo, maximo, numero, inclusivo = false) {
  return inclusivo
    ? numero >= minimo && numero <= maximo
    : numero > minimo && numero < maximo;
}
estaEntre(10, 20, 15);
