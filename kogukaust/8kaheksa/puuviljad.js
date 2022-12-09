// objektid

let apelsin = {
    nimi: "apelsin",
    varv: "orange",
    liik: "puuvili"

}

let porgand = {
    nimi: "porgand",
    varv: "orange",
    liik: "juurvili"
}

let banaan = {
    nimi: "banaan",
    varv: "yellow",
    liik: "rohttaim"
}

// massiiv

let saadused = [ apelsin, porgand, banaan]

//väljund

let valjundelement = document.getElementById("valjund")
for (let i = 0; i < saadused.length; i++)
valjundelement.innerHTML += "<div>" + saadused[i].nimi + "</div>"

