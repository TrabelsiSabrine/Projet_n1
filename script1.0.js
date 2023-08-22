function generateQRCode(text) {
    const qrCode = new QRCode(document.getElementById('qrcode'), {
        text: text,
        width: 128,
        height: 128,
    });
}
function downloadQRCode() {
    const qrCodeText = 'Nouveau texte pour le QR-code';
    generateQRCode(qrCodeText);
    const canvas = document.getElementById('qrcode').querySelector('canvas');
    const qrCodeImgSrc = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = qrCodeImgSrc;
    link.download = 'qr-code.png';
    link.click();}
document.getElementById('downloadBtn').addEventListener('click', downloadQRCode);
