function CalcJurosSimples(pv, i, n) {
    novaTaxa = (i / 100)
    fv = pv * novaTaxa * n + pv

    console.log("Juros Simples:")
    console.log("Sua Taxa foi de " + i + "%")
    console.log("Você investiu R$ " + pv)
    console.log("Você aplicou por " + n + " meses")
    console.log("Seu saldo final é de: " + fv.toFixed(2))
    console.log("--------------------------------------------")

}

function CalcJurosCompostos(pv, i, n) {
    let novaTaxa = 1+ (i / 100)
    let novaTaxa2 = novaTaxa ** n
    fv = pv * novaTaxa2 
    
    console.log("Juros Compostos:")
    console.log("Sua Taxa foi de " + i + "%")
    console.log("Você investiu R$ " + pv)
    console.log("Você aplicou por " + n + " meses")
    console.log("Seu saldo final é de: " + fv.toFixed(2))
}


CalcJurosSimples(100, 50, 2)
CalcJurosCompostos(100,50,2)