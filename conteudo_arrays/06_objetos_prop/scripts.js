let pessoa = {
    nome: "Henrique",
    idade: 23,
    profissao: "Analista de Suporte",
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);