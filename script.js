document.getElementById("encryptBtn").addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value;
    let encryptedText = inputText.replace(/e/g, "enter")
                                 .replace(/i/g, "imes")
                                 .replace(/a/g, "ai")
                                 .replace(/o/g, "ober")
                                 .replace(/u/g, "ufat");
    document.getElementById("outputText").innerHTML = `<h2>Texto Criptografado:</h2><p>${encryptedText}</p>`;
});

document.getElementById("decryptBtn").addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value;
    let decryptedText = inputText.replace(/enter/g, "e")
                                 .replace(/imes/g, "i")
                                 .replace(/ai/g, "a")
                                 .replace(/ober/g, "o")
                                 .replace(/ufat/g, "u");
    document.getElementById("outputText").innerHTML = `<h2>Texto Descriptografado:</h2><p>${decryptedText}</p>`;
});
