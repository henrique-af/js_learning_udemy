function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function() {
        console.log("Aauuuu");
    }
}

let york = new Cachorro('York', 4, 'Marrom e cinza');

york.uivar();