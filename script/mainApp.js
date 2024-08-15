document.addEventListener("DOMContentLoaded", function () {
    let tWabApp = window.Telegram.WebApp

    const MAX_VALUE = 1000000000000000000

    const infoStart = document.getElementById("info-text-start");
    const infoLoad = document.getElementById("info-text-load");
    const qrLink = document.getElementById("qrLink");
    infoLoad.style.display = "none";

    init();

    function init() {
        tWabApp.MainButton.setText("Scan QR code");
        tWabApp.onEvent('mainButtonClicked', showQRScanner);
        tWabApp.onEvent('qrTextReceived', processQRCode);
        tWabApp.MainButton.show()
        tWabApp.MainButton.enable()
    }

    function showQRScanner() {
        let par = {
            text: ""
        };
        tWabApp.showScanQrPopup(par)
    }

    function zeroPad(nr, base) {
        var len = (String(base).length - String(nr).length) + 1;
        return len > 0 ? new Array(len).join('0') + nr : nr;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function openLink(url) {
        tWabApp.openLink(url, try_instant_view = true);
    }

    function processQRCode(data) {
        idNumber = getRandomInt(MAX_VALUE)
        idText = zeroPad(idNumber, MAX_VALUE)
        const suffix = "?uuid=20306&amount=7.00&trxid=" + idText + "&type=05"
        infoLoad.style.display = "block"
        infoStart.style.display = "none"
        window.location.href = "https://ift.multiqr.ru/?uuid=20306&amount=7.00&trxid=12345678912&type=05";
        tWabApp.MainButton.hide()
        tWabApp.closeScanQrPopup()


    }
});
