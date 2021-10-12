//FOR EACH - SEXTA-FEIRA 8 OUT 2021

personagens = ["jim", "Pam", "Michael", "Dwight", "angela"];

personagens.forEach(function (k, i) {
  console.log(`${i + 1} ${k}`);
});

// --------------------------------------------

// IMPLEMENTAÇÃO DO FOR EACH
// (é assim que ele funciona por debaixo dos panos)
// Prototype referes to the global Array() object. The prototype constructor allows you to add new properties and methods to Arrays. When constructing a new property, ALL arrays will get this property and its value. When constructing a new method, ALL arrays will get this method.
// Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

Array.prototype.forEachModificado = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i * 2, this);
  }
};

personagens.forEachModificado(function (a, b) {
  console.log(`${a} ZZZZZ é o ${b + 1} a tirar uma sonequinha`);
});
