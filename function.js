
function encriptarTexto() {

    var texto = document.getElementById("textoCaja").value.toLowerCase();
    var textoCifrado = texto.replaceAll("e","enter");
    var textoCifrado = textoCifrado.replaceAll("i","imes");
    var textoCifrado = textoCifrado.replaceAll("a","ai");
    var textoCifrado = textoCifrado.replaceAll("o","ober");
    var textoCifrado = textoCifrado.replaceAll("u","ufat");
    document.getElementById("img-muñeco").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("textoFinal").textContent = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

  
}

function desencriptarTexto() {
    var texto = document.getElementById("textoCaja").value.toLowerCase();
    var textoCifrado = texto.replaceAll("enter","e");
    var textoCifrado = textoCifrado.replaceAll("imes","i");
    var textoCifrado = textoCifrado.replaceAll("ai","a");
    var textoCifrado = textoCifrado.replaceAll("ober","o");
    var textoCifrado = textoCifrado.replaceAll("ufat","u");

    document.getElementById("img-muñeco").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("textoFinal").textContent = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}



function copiarTexto(){
    var resultado = document.getElementById("textoFinal")
    resultado.select();
    resultado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(resultado.value);
}