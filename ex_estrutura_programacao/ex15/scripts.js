var num = 17;
var tot = 0;
for (var i = 1; i <= num; i++){
    if (num % i == 0){
        tot++;
    }
}

if (tot == 2) {
    console.log(`O número ${num} é primo.`);
} else{
    console.log(`O número ${num} não é primo.`);
}