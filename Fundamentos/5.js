

function correctMoney(a){
    const Money = a.toFixed(2).replace(".", ",")
    console.log("R$ " + Money)
}

correctMoney (0.55657575)