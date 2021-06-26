let nome = "Henrique";

for (let i = 0; i < 10; i = i + 1){
    
    if (i == 3){
        nome = "Henrique 2";
    }

    if (i == 5 && nome == "Henrique 2"){
        console.log(`O nome é ${nome}, pode parar`)
        break;
    }

    console.log(i);

}