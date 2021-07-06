function tamanhoString(texto){
    if (texto.length > 10){
        console.log("Texto muito grande!");
    } else { 
        console.log("Texto dentro do limite");
    }
}

tamanhoString("Teste");
tamanhoString("Testando tamanho do texto");