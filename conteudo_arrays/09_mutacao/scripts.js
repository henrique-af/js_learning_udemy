let pessoa = {
    nome: "Henrique"
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.nome = "Outro nome";

console.log(pessoa.nome);

pessoa.nome = "Henrique"

console.log(pessoa2.nome);