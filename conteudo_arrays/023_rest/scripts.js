let num1 = 1;
let num2 = 5;
let num3 = 7;
let num4 = 9;

function imprimirNumeros(... args){
    for (i = 0; i < args.length; i++)
    console.log(args[i]);
}

imprimirNumeros(num1, num2, num3);
console.log("Carregando...");
imprimirNumeros(num3, num4);
imprimirNumeros(2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9);