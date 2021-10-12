//Padrao observer ou event handler ou Listner. Mais usado na WEB, mais usado que o MVC
// fundamental para comunicações assincronas (ajax)

//como funciona o padrao observer?
// o evento: o aniversário do namorado. 
//(sem observer) a namorada pode ficar na janela esperando o namorado chegar até que eles apaguem as luzes e se escondam.
//ou
//(Com observer) a namorada pode pedir para o porteiro notificar quando ele chegar em casa, pra que eles se preperaprem para a surpresa, de froma que ela fica livre para outras atividades. 


const marcas = ["Mercedes", "audi", "VW", "ford", "ferrari"];


//CALLBACK FOR EACH
function imprimir(nome, indice) {
    console.log(`${indice +1}. ${nome}`)
}

function doidera() {
    console.log(`Eu sou doido`)
}

function doideraComParametros(jebjeb, bola) {
    console.log(`${jebjeb} Eu sou doido ${bola +1}`)
}

marcas.forEach(imprimir)

console.log("/-------/")

marcas.forEach(function (a, i) {
    console.log(`${i+1}. ${a}`)
});

console.log("/-------/")
marcas.forEach(doidera)
//nesse caso como não foi passado nenhum paramatro ele só roda a funcao para cada item do array

console.log("/-------/")
marcas.forEach(doideraComParametros)
// nesse caso, o for each entende que sempre o primeiro apratro é o item do array e o segundo o indice

//Duvidas
//1) por que na funcao callback de forEach os parametros podem ser aleatorios?
//      pois a funcao callback ja esta definida, caso tenha parametro ou caso só seja passadada uma funcao mesmo 

// CALLBACK FILTER

const notas = [1.1, 10, 5.3, 8.2, 9.2, 2.9]

//sem usar Calback

const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
    // o return é a regra da funçao que está dentro do filter;
})

const notasbaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas2)


//CALLBACK NO BROWSER

document.getElementsByTagName("body")[0].onclick = function(evento){
    console.log("o evento ocorreu")
}
