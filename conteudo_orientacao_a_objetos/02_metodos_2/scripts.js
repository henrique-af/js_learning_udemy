const cachorro = {
    raca: 'york',
    uivar: function(){
        console.log("Auuuuuuuuuu");
    },
    rosnar: function(){
        console.log("Grrrrrr");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

console.log(cachorro.raca)

cachorro.setRaca('shitzu');

console.log(cachorro.getRaca());