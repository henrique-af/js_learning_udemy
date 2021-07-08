let a = 1;
let x = 7;
let z = 10;

if (x > a){
    x = a;
    console.log(x);
}

for (let i = 5; i > 0; i--){
    x++;
    x += z
    z = 1;
    console.log(x);
    if (z >= a){
        z = 25;
    }
}

console.log(z);