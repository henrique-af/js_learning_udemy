class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log("Au au");
    }
}


Cachorro.prototype.patas = 4;

let york = new Cachorro('York','Marrom e Cinza');

console.log(york);
york.latir();