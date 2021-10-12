const pessoa = {
    saudacao : ("bom dia"),
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falante = pessoa.falar();
//falante(); // ao armazenar a funcao falar numa variavel tenho um erro 
//saudacao aponta pra um this diferente, que nao é mais o objeto pessoa.
// aqui tem um conflito entre paradigma OO e o funcional

//solucao
const falarDePessoa =pessoa.falar.bind(pessoa)
falarDePessoa();