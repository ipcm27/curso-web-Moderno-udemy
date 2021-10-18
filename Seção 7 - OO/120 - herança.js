//cadeia de protótipo
const Carro = {
  velAtual: 0,
  velMaxima: 200,
  acelrarMais(delta) {
    if (this.velAtual + delta <= this.velMaxima) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMaxima;
    }
  },
  status(){
      return `${this.velAtual}km/h de ${this.velMaxima}km/h`
  }
};

ferrari = {
    modelo:"F40",
    velMax = 324 //shadowing
}

const volvo = {
    modelo: "v10",
    status(){
        return `${this.modelo}: ${super.status}`
    }
}
Object.setPrototypeOf(ferrari,Carro)
Object.setPrototypeOf(volvo,Carro)
