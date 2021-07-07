const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
console.log(pessoa.hasOwnProperty('maos'));

const pessoaNew = Object.create(pessoa);

console.log(pessoaNew.maos);

console.log(pessoaNew.hasOwnProperty('maos'));

console.log(Object.getPrototypeOf(pessoaNew) === Object.prototype)