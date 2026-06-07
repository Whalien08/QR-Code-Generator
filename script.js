function generateQRCode() {
    const text = document.getElementById("text").value;
    const qrcodeContainer = document.getElementById("qrcode");
    
    // Clear previous QR code if any
    qrcodeContainer.innerHTML = ""; 
    
    if (text.trim() !== "") {
        new QRCode(qrcodeContainer, {
            text: text,
            width: 200,
            height: 200,
        });
        document.querySelector(".container").style.minHeight = "600px";
        document.getElementById("clear-btn").style.display = "block";
    }
}

function clearQR() {
    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    document.getElementById("text").value = "";
    document.querySelector(".container").style.minHeight = "500px";
    document.getElementById("clear-btn").style.display = "none";
}