function loopDecrementa(n){
    for (var i = n; i >= 0; i--){
        if (i % 2 == 0){
            console.log("Número par " + i)
        }
    }
}

console.log(loopDecrementa(50));