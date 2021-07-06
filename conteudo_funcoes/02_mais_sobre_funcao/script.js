function multiplicarTresNumeros (x, y, z) {
    return x * y * z
}

console.log(multiplicarTresNumeros(2, 3, 4));

const multi = multiplicarTresNumeros(5, 4, 8);

console.log("O valor é mult é " + mult);

function podeDirigir(idade, cnh){
    if (idade >= 18 && cnh == true){
        console.log("Pode dirigir!");
    } else if (idade >=18 && cnh == false) {
        console.log("Cuidado ao dirigir sem carteira!");
    } else {
        console.log("Não está apto a dirigir!")
    }
}

console.log(podeDirigir(18, true));
console.log(podeDirigir(17, false));
console.log(podeDirigir(99, 1));
console.log(podeDirigir(25, false));