function valjastatekst(sisendtekst) {
let valjundelement = document.getElementById("valjund")
valjundelement.innerHTML += "<div>" + sisendtekst + "</div>"
console.log(sisendtekst)
}

function lisa() {
    let sisendtekst = document.getElementById("sisend").value
    for (let index = 0; index < sisendtekst; index++) {
        valjastatekst ( (index + 1) + ". " + sisendtekst)
       console.log(sisendtekst)
    }
 valjastatekst(sisendtekst)
    
}

