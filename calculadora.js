let botaoCalcular = document.getElementById("botaoCalcular");

function calculoIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value / 100;
    let resultado = document.getElementById("imc");

    if (peso !== "" && altura !== "") {
        let imc = (peso / (altura ^ 2)).toFixed(2);
        let msg = "";

        if (imc < 18.5) {
            msg = "Abaixo do peso!";
        } else if (imc < 25) {
            msg = "Peso ideal!";
        } else if (imc < 30) {
            msg = "Levemente acima do peso!";
        } else if (imc < 35) {
            msg = "Obesidade grau 1!";
        } else if (imc < 40) {
            msg = "Obesidade grau 2!";
        } else {
            msg = "Obesidade grau 3!";
        }

        resultado.textContent = `IMC: ${imc}. ${msg}`;
    } else {
        resultado.textContent = "Campos com valores inválidos";
    }
}

botaoCalcular.addEventListener('click', calculoIMC);