var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso)
    var alturaValida = validaAltura(altura)

    if (!pesoValido) {
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida){
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso (peso) {
    if (peso >= 0 && peso < 1000){
        return true;
    }else {
        return false;
    }
}

function validaAltura (altura) {
    if (altura >= 0 && altura <= 3.00){
        return true;
    }else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0

    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}
