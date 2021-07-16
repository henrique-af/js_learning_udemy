function checarNumero(num){
    let number = Number(num);
    if (Number.isNaN(number)){
        alert("Por favor, utilize somente números no programa");
    } else {
        return number;
    }
}

checarNumero(5);
checarNumero("Teste");

let number = prompt("Digite um número");

checarNumero(number);