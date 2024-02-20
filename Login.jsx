
var Login = "teste";
var Senha = "teste";

var txtLogin = document.getElementById("txtLogin");
var txtSenha = document.getElementById("txtSenha");

// var txtLogin = document.getElementById("txtLogin");
// var txtSenha = document.getElementById("txtSenha");


export const fazerLogin = (e) => {
    if (txtLogin.current.value == Login && txtSenha.value == Senha) {
        console.log("Acesso Liberado");
    } else{
            console.log("Login ou Senha inválidos");
        }
    }