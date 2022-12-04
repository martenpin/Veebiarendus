let kasutajanimi = ""
while (kasutajanimi == "") {
    kasutajanimi = prompt("mis on sinu nimi?")
}

let tervitus = "hommik <strong>" + kasutajanimi + "</strong>"
let tervituselement = document.getElementById("tervitus")

if (kasutajanimi == "Madis") {
    tervitus = "hommik mu sõber " + kasutajanimi
}

tervitus = tervitus + "<h2>Tähed sinu nimes</h2>"



for (let index = 0; index < kasutajanimi.length; index = index +1) {
   tervitus += "<div> täht nr " + index + " on " + kasutajanimi[index] + "</div>"
    
}

tervituselement.innerHTML = tervitus
console.log(tervitus)