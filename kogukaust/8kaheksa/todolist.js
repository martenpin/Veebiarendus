function valjastatekst(sisendtekst) {
let valjundelement = document.getElementById("valjund")
valjundelement.innerHTML += "<div>" + sisendtekst + "</div>"
console.log(sisendtekst)
}

function lisa() {
    let sisendtekst = document.getElementById("sisend").value
    for (let index = 0; index < ; index++) {
        valjastatekst ( (index + 1) + ". " + sisendtekst)
        
    }
valjastatekst(sisendtekst)
    
}