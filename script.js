function encriptar(){
    var texto = document.getElementById("textoencriptar").value.toLowerCase();
    var textocifrado = texto.replace(/e/img, "enter");
    var textocifrado = textocifrado.replace(/o/img, "ober");
    var textocifrado = textocifrado.replace(/i/img, "imes");
    var textocifrado = textocifrado.replace(/a/img, "ai");
    var textocifrado = textocifrado.replace(/u/img, "ufat");

    document.getElementById("textomuneco1").style.display = "none";
    document.getElementById("textomuneco2").value = textocifrado;
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";
}
function desencriptar(){
    var texto = document.getElementById("textoencriptar").value.toLowerCase();
    var textocifrado = texto.replace(/enter/img, "e");
    var textocifrado = textocifrado.replace(/ober/img, "o");
    var textocifrado = textocifrado.replace(/imes/img, "i");
    var textocifrado = textocifrado.replace(/ai/img, "a");
    var textocifrado = textocifrado.replace(/ufat/img, "u");
    
    document.getElementById("textomuneco1").style.display = "none";
    document.getElementById("textomuneco2").value = textocifrado;
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";
}

function copiar(){
    // var textocopiar = document.querySelector("#textomuneco2"); // copiado
    // textocopiar.select();
    document.querySelector("#textomuneco2").select();
    document.execCommand("cut");
    alert("¡Copiado!");  
}

