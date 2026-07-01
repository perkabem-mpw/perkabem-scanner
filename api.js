const API_URL =
"https://script.google.com/macros/s/AKfycbzk78w5BqDWSPOmCsNJe_QfMwVvqhsFD0HLe4ypCb0zt3SEDbF-RvvZyw1tkrLDWWXolQ/exec?page=api";

async function previewMember(memberId){

    try{

        const res = await fetch(

            API_URL +
            "&action=preview" +
            "&memberId=" +
            encodeURIComponent(memberId)

        );

        const data = await res.json();

        showGuest(data);

    }catch(err){

        console.error(err);

        alert(err);

    }

}
