function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function() {
    console.log("Auuuuuuuuuuu");
}

Cachorro.prototype.latir = function() {
    console.log("Au au");
}

let york = new Cachorro('York', 4, 'Marrom e cinza');

york.uivar();
york.latir();