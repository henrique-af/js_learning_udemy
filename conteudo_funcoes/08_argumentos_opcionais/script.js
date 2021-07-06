function soma(a,n) {
    if (a === undefined || b === undefined){
        console.log("Essa função precisa ter os dois argumentos");
    } else {
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(2, 1));

function saudacao(nome, idade){
    if (idade == undefined){
        console.log("Olá " + nome);
    } else {
        console.log("Olá " + nome + " você tem " + idade + " anos");
    }
}

saudacao("Henrique");
saudacao("Henrique, 23");