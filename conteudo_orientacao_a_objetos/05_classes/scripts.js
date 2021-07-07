let cachorro = {
    patas: 4,
    raca: 'York',
    latir: function() {
        console.log("Auuuuuuuu au");
    },
}

let shitzu = Object.create(cachorro);

shitzu.latir();

shitzu.raca = "Shitzu";

console.log(shitzu.raca);
console.log(cachorro.raca);

let rot = Object.create(cachorro);

rot.raca = "Rotwailer";

console.log(rot.raca);