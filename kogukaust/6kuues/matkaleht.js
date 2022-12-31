let KliendiAndmed = ""
function buttonKontakt() {
    let InputName = document.getElementById("sisendnimi");
    let InputMail = document.getElementById("sisendemail");
    let InputMessage = document.getElementById("sisends6num");
    let KliendiAndmed = InputName + " " + InputMail + " " + InputMessage;
    console.log(KliendiAndmed.value);
    
 
}