var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    //desliga a ação padrão do botão
    event.preventDefault();

    //extrai o objeto form para a varialvel
    var form = document.querySelector("#form-adiciona");

    //extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //valida se o paciente é valido
    var erros = validaPaciente(paciente);

    //exibe as mensagens de erro
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    //adicionando o paciente na tabela
    adicionaPacienteNaTabela(paciente);

    //limpa o formulario
    form.reset();

    //limpa as mensagens de erro
    var mensagensErro = document.querySelector("#mensagens-de-erro");
    mensagensErro.innerHTML = ""
});

function adicionaPacienteNaTabela (paciente) {

    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr);

}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr
}

function montaTd (dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente (paciente) {

    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push('O nome não pode ficar em branco')
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("O peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("A altura é inválida");    
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura corporal não pode ficar em branco")
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ficar em branco")
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ficar em branco")
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-de-erro");
    ul.innerHTML = ""

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}