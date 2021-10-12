// Clousure é o escopo criado quando a função é declarada
// Esse escopo permite a função acessar e manipular as váriaveis externas a funcao
// #ContextoLexico
// informalmente: a funcao lembra das sua origiens, do contexto que ela tava

const x = "global";

function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());
