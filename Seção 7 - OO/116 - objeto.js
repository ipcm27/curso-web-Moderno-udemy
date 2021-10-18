//Json é uma string. A gente converte ele em objeto rpapoder manipular.

// 116
// formas de criar um objeto:
//  inicializadores de ibjeto,funcoes construtoras, funcoes factory, object.create

// 117
// Quando manipulamos um objeto estamos mexendo NO OBJEto e nao na constante que ele está atribuido.
// # object.freeze();

//118
// criar objetos a=1 b=2 c-=3
// obj1 = {a:1,b:b,c:c} - forma antiga
// obj2 = {a,b,c} = froma nva
//.... mais melhorias do ecmascript 2015 que a gente ja vem usando de forma intuitiva

//120 - Funcoes legais de Object
const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.defineProperty(pessoa, "data de nascimento", {
  enumerable: true,
  writable: false,
  value: "01 / 03 / 2000",
});
console.log(pessoa);

//---
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { a: 3, c: 4 };
const ob = Object.assign(dest, o1, o2);

console.log(dest);
