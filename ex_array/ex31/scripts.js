let array1 = [0, 1, 2, 3, 4];
let array2 = [0, 1, 2, 3];

function verificaArray(array){
    if (array.length < 5){
        console.log("Poucos Elementos");
    } else {
        console.log("Muitos elementos");
    }
}

verificaArray(array1);
verificaArray(array2);