function criaCachorro (raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function() {
        console.log("Au au");
    }
    return cachorro;
}

let york = criaCachorro('York', 4, 'Marrom e Cinza');

console.log(york);
york.latir();