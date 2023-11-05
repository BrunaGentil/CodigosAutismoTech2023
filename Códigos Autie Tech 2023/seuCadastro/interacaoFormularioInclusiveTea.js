function validateInputs() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let numeroTelefone = document.getElementById("telefone").value;
    let numeroTelefoneConvert = Number(numeroTelefone); //Fazer Expressões Regulares para outros inputs (e-mail e gênero).
    if ((!nome || nome == " ") || (!sobrenome || sobrenome == " " || (!numeroTelefone || numeroTelefone === " " || isNaN(numeroTelefoneConvert )))) { // só o sobrenome que não tá cumprindo a regra. Corrigido colocando not no lugar do null. Fazer também um Expressão Regular para validar número comtantos dígitos(exemplo).
        document.getElementById("enviar").disabled = true; //.disabled é uma propriedade que desabilita
    } else {
        document.getElementById("enviar").disabled = false;
    }
}