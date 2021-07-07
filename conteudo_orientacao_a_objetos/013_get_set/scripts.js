class Cachorro {
    constructor(raca, patas, cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("Au au")
    }   

    get getCor(){
        return this.cor;
    }
    set setCor(cor){
        this.cor = cor;
    }
}

let york = new Cachorro('York', 'Cinza e Marrom');

console.log(york);

york.setCor = 'Preto, cinza, marrom';

console.log(york.getCor);