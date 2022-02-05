var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
    var tabela = document.querySelector("table");
    tabela.addEventListener("dblclick", function (event) {
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function(){
            if (event.target.tagName == 'TD') {
                event.target.parentNode.remove();
            }
            
        }, 500);
    });

});
//pacientes.forEach(function(paciente){
   // paciente.addEventListener("dblclick", function(){
     ///   this.remove();
    //});
//});