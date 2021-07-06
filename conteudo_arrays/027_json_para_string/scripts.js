let pessoa = {
    "nome": "Henrique",
    "idade": 28,
    "profissao": "Analista",
    "hobbies": ["Ler", "Jogar", "Academia"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON.hobbies[1]);