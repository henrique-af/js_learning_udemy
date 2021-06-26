let idade = 19;
let nome = "Henrique";

if (idade == 19) {
    console.log("A idade é igual a 19");
}

if (idade>25){
    console.log("Idade é maior que 25");
}

if (nome == "Henrique" && idade > 10){
    console.log("Bem vindo Henrique!");
}

let passaporte = true;

if ((nome == "Henrique" && idade > 10) || passaporte == true){
    console.log("Liberado!");
}