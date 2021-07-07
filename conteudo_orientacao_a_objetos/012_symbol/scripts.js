class Cachorro {
    constructor(raca, patas, cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("Au au")
    }   
}

Cachorro.prototype.raca = 'York';
let patas = Symbol();

Cachorro.prototype[patas] = 4;

let york = new Cachorro('York', 'Cinza e Marrom');

console.log(york.patas);
york.latir();

console.log(Cachorro.prototype.raca);
console.log(york.raca);

//acessando o symbol
console.log(Cachorro.prototype[patas]);

console.log(york[patas]);