const Carro = function (velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0;
    //atributo privado, por isso usou o let

    //usou o this para ser um método público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta 
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //atributo público = o this faz isso com ela
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro;

uno.acelerar();
uno.acelerar();
uno.acelerar();
console.log(uno.getVelocidadeAtual())

const golfGTi = new Carro(300,15)

golfGTi.acelerar()
golfGTi.acelerar()
console.log(golfGTi.getVelocidadeAtual())
