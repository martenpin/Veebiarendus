let kasutajanimi = ""
while (kasutajanimi == "") {
    kasutajanimi = prompt("mis on sinu nimi?")
}

let pikknimi = "sul on pikk nimi " + kasutajanimi

let lyhikenimi = "<h1>" + "sul on lühike nimi " + kasutajanimi + "</h1>"

if (kasutajanimi.length > 6) {
    kasutajanimi = pikknimi
}

if (kasutajanimi.length <= 6) {
    kasutajanimi = lyhikenimi + "<img src=./assets/4a1df021749a54fc2d50ad03c65e25ba.jpg><img>"
}

let nimeelement = document.getElementById("nimi")

nimeelement.innerHTML = kasutajanimi
console.log(nimi)