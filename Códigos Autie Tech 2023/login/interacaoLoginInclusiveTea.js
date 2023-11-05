function validateInputs() {
    let senha = document.getElementById("senha").value;
    let email = document.getElementById("email").value;
    //Fazer Expressões Regulares para inputs
    if ((!email || email == " ") || (!senha || senha == " ")) { // Corrigido colocando not no lugar do null. 
        document.getElementById("enviar").disabled = true; //.disabled é uma propriedade que desabilita
    } else {
        document.getElementById("enviar").disabled = false;
    }
}