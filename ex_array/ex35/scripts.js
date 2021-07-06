let calculadora = {
    soma: function(a, b){
        return a + b;
    },
    subtrair: function(a, b){
        return a - b;
    },
    multiplicar: function(a, b){
        return a * b;
    },
    dividir: function(a, b){
        return a / b;
    }
}

console.log(calculadora.soma(20, 2))
console.log(calculadora.subtrair(20, 2))
console.log(calculadora.multiplicar(20, 2))
console.log(calculadora.dividir(20, 2))