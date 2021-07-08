class ContaBancaria{
    constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca){
    this.saldoContaCorrente = saldoContaCorrente;
    this.saldoContaPoupanca = saldoContaPoupanca;
    this.jurosPoupanca = jurosPoupanca;
    }
    deposito(valor){
        this.saldoContaCorrente += valor;
    }
    saque(valor){
        this.saldoContaCorrente -= valor;
    }
    transferenciaPoupanca(valor){
        this.saldoContaCorrente -= valor;
        this.saldoContaPoupanca += valor;
    }
    transferenciaCorrente(valor){
        this.saldoContaPoupanca-= valor;
        this.saldoContaCorrente += valor;
    }
    jurosAniversario (){
        let juros = (this.saldoContaPoupanca * this.jurosPoupanca) / 100;
        this.saldoContaPoupanca += juros;
    }
}

class ContaEspecial extends ContaBancaria {
    constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca){
        super(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca*2)
    }
}

let contaBancaria = new ContaBancaria(1000, 5000, 2);

console.log(contaBancaria);

contaBancaria.saque(500);

console.log(contaBancaria);

contaBancaria.deposito(1500);

console.log(contaBancaria);

contaBancaria.transferenciaPoupanca(1000);

console.log(contaBancaria);

contaBancaria.jurosAniversario();

console.log(contaBancaria);

let contaEspecial = new ContaEspecial(5000, 20000, 2);

contaEspecial.saque(5000);

console.log(contaEspecial);

contaEspecial.jurosAniversario();

console.log(contaEspecial)