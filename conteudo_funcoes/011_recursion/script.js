function recursao(n){
    if (n-1 == 2) {
        console.log("Recursão parou");
    } else if (n % 2 == 0){
        console.log("Número impar " + 2);
        recursao (n-1)
    } else {
        console.log("Número par " + 2);
        recursao(n -2);
    }
}

recursao(39);
recursao(10);
recursao(55);