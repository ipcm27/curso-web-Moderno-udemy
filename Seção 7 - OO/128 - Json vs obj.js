// java script object notation
// JSON é um formato de dados usado para interoperabilidade entre sistemas
// é um formato TEXTUAL

const obj = {
  a: 1,
  b: 2,
  c: 3,
  somar() {
    return a + b + c;
  },
};

console.log(JSON.stringify(obj));

console.log(JSON.parse('{ "nome": "carlos", "idade":46, "Milionário": false}'));
