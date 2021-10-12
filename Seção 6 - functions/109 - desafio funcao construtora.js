function Pessoa(nome) {
  nome,
    (this.falar = function () {
      console.log(`meu nome é ${nome}`);
    });
}
const michael = new Pessoa("michael");

michael.falar();
