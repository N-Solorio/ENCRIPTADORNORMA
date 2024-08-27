function encriptar (){

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco= document.getElementById("muñeco");
    
       let textoCifrado = texto     
                .replace(/e/gi, "enter")
                .replace(/i/gi, "imes")
                .replace(/a/gi, "ai")
                .replace(/o/gi, "ober")
                .replace(/u/gi, "ufat");

    if (document.getElementById("texto").value.length != 0)
        {
        document.getElementById("texto").value = textoCifrado;
        document.getElementById("titulo-mensaje").textContent= "Texto encriptado con éxito";
        document.getElementById("parrafo").textContent = "";
        document.getElementById("muñeco").src = "./img/muybien.png";}
        
    else{
    document.getElementById("muñeco").src = "./img/Muñeco.png";
    document.getElementById("titulo-mensaje").textContent= "Ningún mensaje se encontro";
    document.getElementById("parrafo").textContent = "Ingresa el texto que deseas encritar o desencriptar";
    }
}
 function desencriptar() {
    let texto = document.getElementById("texto").value;

    let textoCifrado = texto
                .replace(/enter/gi, "e")
                .replace(/imes/gi, "i")
                .replace(/ai/gi, "a")
                .replace(/ober/gi, "o")
                .replace(/ufat/gi, "u");
    
    if (document.getElementById("texto").value.length != 0)
        {
        document.getElementById("texto").value = textoCifrado;
        document.getElementById("titulo-mensaje").textContent= "Texto desencriptado con éxito";
        document.getElementById("parrafo").textContent = "";
        else{
            document.getElementById("muñeco").src = "./img/Muñeco.png";
            document.getElementById("titulo-mensaje").textContent= "Ningún mensaje se encontro";
            document.getElementById("parrafo").textContent = "Ingresa el texto que deseas encritar o desencriptar";
            }
        }   
 }


