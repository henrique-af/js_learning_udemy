class Banco {
    constructor(saldo){
        this.saldo = saldo;
    }
    deposito(valorDeposito){
        valorDeposito = 500;
        console.log("O deposito é no valor de: " + valorDeposito);
        this.saldo = this.saldo + valorDeposito;
        console.log("Seu saldo atual é de " + this.saldo);
    }
    saque(valorSaque){
        valorSaque = 200;
        console.log("O saque é no valor de: " + valorSaque);
        this.saldo = this.saldo - valorSaque;
        console.log("Seu saldo atual é de " + this.saldo);
    }
}

let conta = new Banco(500);

conta.deposito();
conta.saque();