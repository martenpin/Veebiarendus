function valjastatekst(sisendtekst) {
let valjundelement = document.getElementById("valjund")
valjundelement.innerHTML += "<div>" + sisendtekst + "</div>"
console.log(sisendtekst)
}
let valjundtekst = []

function lisa() {
    
    let sisendtekst = document.getElementById("sisend").value
    valjundtekst.push(sisendtekst)
    for (let index = 0; index < valjundtekst; index++) {
        valjastatekst ( ([index] + 1) + ". " + sisendtekst)
       console.log(sisendtekst)
    }
 valjastatekst(sisendtekst)
    
}

