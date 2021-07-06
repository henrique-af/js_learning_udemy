function tipoDeDado(dado){
    if (typeof dado == 'boolean'){
        console.log("Esse dado é do tipo boolean");
    } else if (typeof dado == 'number') {
        console.log("Esse dado é do tipo number");
    } else if (typeof dado == 'string') {
        console.log("Esse dado é do tipo string");
    }
}

tipoDeDado(23);
tipoDeDado("Henrique");
tipoDeDado(true);