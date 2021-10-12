let pontosJogoAtual
let maiorPonto =0
let menorPonto = 50
let ListaDePontos = []

function ArmazenarPontos (pontosJogoAtual){
    ListaDePontos.push(pontosJogoAtual)
    

    if (pontosJogoAtual >= maiorPonto) {
        maiorPonto = pontosJogoAtual
    } 
    else if (pontosJogoAtual <= menorPonto) {
        menorPonto = pontosJogoAtual}


    console.log("No jogo atual você fez " + pontosJogoAtual)    
    console.log("Sua maior pontuação num jogo é " + maiorPonto)
    console.log("Sua menor pontuação num jogo é " + menorPonto)
    console.log("Seus jogos foram: " + ListaDePontos)
    console.log("-----------------------------")

}

ArmazenarPontos (35)
ArmazenarPontos (20)
ArmazenarPontos (50)
ArmazenarPontos (08)


