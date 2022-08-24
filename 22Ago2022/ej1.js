function tableCreation(tablaDel){
    console.log("Calculando tabla del: " + tablaDel);
    for (i = 1; i <= 10; i++) {
        console.log(tablaDel + " x " + i + " = " + tablaDel * i);
    }
}

function ej1TablaMult() {
    let inicio = parseInt(prompt("Ingrese el valor de inicio"));
    let limite = parseInt(prompt("Ingrese el valor de finalización"));

    console.log("El primer valor es: " + inicio);
    console.log("El segundo valor es: " + limite);
    var contador=inicio;
    do{
        tableCreation(contador)
        contador++
    } while( contador<=limite) ;
}