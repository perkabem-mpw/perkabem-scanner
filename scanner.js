let codeReader;

async function startScanner(){

    codeReader = new ZXingBrowser.BrowserQRCodeReader();

    try{

        await codeReader.decodeFromConstraints(

            {
                video:{
                    facingMode:"environment"
                }
            },

            "video",

            (result, error) => {

    if (error) {
        return;
    }

    console.log("CALLBACK");

    if(result){

        console.log("HASIL =", result.text);

        alert("QR = " + result.text);

        codeReader.stop();

    }

}

        );

    }catch(err){

        console.error(err);

        alert(err);

    }

}

window.onload = startScanner;
