let kasutajanimi = ""
while (kasutajanimi == "") {
    kasutajanimi = prompt ("mis on sinu nimi?" )
}

let nimeelement = document.getElementById("nimi")

    if (kasutajanimi.length <= 6) {
        nimi= "sul on lühike nimi " + kasutajanimi
        
    }

    if (kasutajanimi.length > 6) {
        nimi= "sul on pikk nimi " + kasutajanimi
    }

    nimeelement.innerHTML = nimi