let codeReader;
let scanned = false;

async function startScanner() {

    codeReader = new ZXingBrowser.BrowserQRCodeReader();

    try {

        await codeReader.decodeFromConstraints(

            {
                video: {
                    facingMode: "environment"
                }
            },

            "video",

            (result, error) => {

                if (error) return;

                if (!result) return;

                // supaya hanya jalan sekali
                if (scanned) return;

                scanned = true;

                const memberId = result.text.trim();

                console.log("QR =", memberId);

                // hentikan scanner
                codeReader.stop();

                // beri jeda sedikit
                setTimeout(() => {

                    location.href =
                        "https://script.google.com/macros/s/AKfycbzk78w5BqDWSPOmCsNJe_QfMwVvqhsFD0HLe4ypCb0zt3SEDbF-RvvZyw1tkrLDWWXolQ/exec?page=scanResult&memberId="
                        + encodeURIComponent(memberId);

                }, 300);

            }

        );

    } catch (err) {

        console.error(err);
        alert(err);

    }

}

window.onload = startScanner;
