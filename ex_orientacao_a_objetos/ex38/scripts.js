class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua)  {
        this.rua = novaRua;
    }
    set novoBairro(novoBairro)  {
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade)  {
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado)  {
        this.estado = novoEstado;
    }
}

let cliente = new Endereco("Viena", "Parque Vitória", "Franco da Rocha", "SP");

console.log(cliente);

cliente.novaRua = "Diamantina";
cliente.novoBairro = "Vila Guilherme";
cliente.novaCidade = "São Paulo";

console.log(cliente);