document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if (document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
        alert("Prontinho! você receberá as novidades por email.")
    }else{
        alert("Preencha novamente os campos nome e email")
    }
}
