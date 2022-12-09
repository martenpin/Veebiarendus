// massiivid

let varvid = ["roheline", "punane", "must"]

// funktsioonid 

function valjastatekst(sisendtekst) {
    let valjundelement = document.getElementById("valjund")
    valjundelement.innerHTML +="<div>" + sisendtekst + "</div>"
    console.log(sisendtekst)
}

function varviarvamine() {
    let sisendtekst = document.getElementById("sisend").value
    if (varvid.includes(sisendtekst)) {
        valjastatekst ("Tubli, kõik minu lemmikvärvid on:")        
    for (let index = 0; index < varvid.length; index++) {
        valjastatekst( (index + 1) + ". " + varvid[index] )
        
    }
    } else {
        valjastatekst ("Värv " + sisendtekst + " ei ole minu lemmik värv")
    }

    
}