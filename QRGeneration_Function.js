document.addEventListener("DOMContentLoaded", function () {
    // Load the qrcode.js library
    const script = document.createElement("script");
    script.src = "qrcode.min.js";
    document.head.appendChild(script);
  
    script.onload = function () {
      // qrcode.js is loaded, initialize the app
      generateQR();
    };
  });
  
  function generateQR() {
    const qrContainer = document.getElementById("qr-container");
    qrContainer.innerHTML = ""; // Clear previous QR code
  
    const qrCodeValue = "Hello, this is your QR code!"; // Replace with your desired message
  
    // Use qrcode.js to generate the QR code
    const qrcode = new QRCode(qrContainer, {
      text: qrCodeValue,
      width: 128,
      height: 128,
    });
  }
  