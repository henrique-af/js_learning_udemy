function autoEscola(idade) {
    if (idade >= 18) {
        console.log(`Você tem ${idade} anos, já está apto a dirigir`);
    } else {
        console.log(`Você ainda não tem idade suficiente para dirigir`);
    }
}

autoEscola(18);
autoEscola(15);