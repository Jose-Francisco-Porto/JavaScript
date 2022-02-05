var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    
    
    
    
    //função para exibir as mensagens de erros;
    function exibirMensagensDeErro(erros){
        //variavel para guardar a ul. 
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
        erros.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
            
    }
  
    //extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    


    //validação da tela de cadastro.
    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        var mensagensDeErro = document.querySelector("#mensagens-erro");
        mensagensDeErro.textContent = erros;
        return;
    }
    adicionaPacienteNaTabela(paciente)

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";


});

function adicionaPacienteNaTabela(paciente){
    
    //cria a tr e a td do paciente
    var pacienteTr = montarTr(paciente);
     //selecionar a tabela, tbody do html atraves do seu id, o appendChild fa isso na tr
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

    }
    return paciente;
}
function montarTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //colocando a td, dentro da Trs.
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}
function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente){

    var erros = [];
    if (paciente.nome.length == 0) {
        erros.push("O nome do paciente não pode ser em branco.  ")
    }
    if (paciente.gordura.length == 0) {
        erros.push("A gordura do paciente não pode ficar em branco.")
    }
    if (paciente.peso.length == 0) {
        erros.push("O peso do paciente não pode ser em branco.")
    }
    if (paciente.altura.length == 0) {
        erros.push("A altura do paciente não pode ficar em branco.")
    }
    if(!validaPeso(paciente.peso)){
        erros.push("O Peso do Paciente é inválido.");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura do Paciente é inválida."); 
    }
    return erros;
}