// objektid

let apelsin = {
    nimi: "apelsin",
    varv: "orange",
    liik: "puuvili",
    hinnang: 5,
    pilt: "./assets/orange-300x200.jpg",
    kirjeldus: "Apelsin on vilja ehituselt mari. Rohkelt eeterlikke õlisid sisaldav koor koosneb oranžist näärmelisest väliskestast (eksokarbist) ja selle all asuvast heledast ja säsikast vahekestast (mesokarbist). Vilja mahlakas sisekest on jaotunud kilejate vaheseintega kümneks sektoriks. Sektorites asuv viljaliha koosneb mesokarbist sissepoole sopistunud pikkadest peenikestest mahlaga täidetud kotikestest. Sektorites asuvad ka apelsini seemned."

}

let porgand = {
    nimi: "porgand",
    varv: "orange",
    liik: "juurvili",
    hinnang: 6,
    pilt: "./assets/istockphoto-166106089-612x612.jpg",
    kirjeldus: "Porgand on kaheaastane taim. Esimesel aastal kasvatab ta lehekodariku ja juurvilja. Teisel aastal kasvab kuni 1 m kõrgune hargnenud õisikuvars, millel arenevad õied ja valmivad seemned Porgandi õisik on liitsarikas. Õied on väikesed, valged, kreemikad või roosad. Kahesoolistel õitel küpsevad esmalt meesusuguorganid ja seejärel naissuguorganid. Risttolmlemine toimub putukate abil. Tolmukaid on viis ja need vahelduvad kroonlehtedega."

}

let banaan = {
    nimi: "banaan",
    varv: "yellow",
    liik: "rohttaim",
    hinnang: 6,
    pilt: "./assets/658610.jpg",
    kirjeldus: "Banaani peetakse sageli ekslikult puuviljaks, kuid tegelikult kannavad banaane maailma suurimad rohttaimed, mille kõrgus võib küündida 6–7,6 või teistel andmetel 15 meetrini ja läbimõõt 1 meetrini. Banaanilehe pindala on umbes ruutmeeter."

}

// massiiv

let saadused = [apelsin, porgand, banaan]

function loopuuviljahtml(puuvili) {
    return `
    <div class="col-6 card kaart">
    <img class="card-img-top" src="${puuvili.pilt}" >
    <div class="card-body">
    <div class="card-title">
    <h1>
    ${puuvili.nimi}
    </h1>
    </div>
            <div class="card-text">
            <h2>
            Liik: 
            </h2> 
            <p>
            ${puuvili.liik}
            <p>
            <h2>
            Hinnang puuviljale:
            </h2> 
            <p>
             ${puuvili.hinnang}
            <p>
            <h2>
            Kirjeldus:
</h2> 
            <p>
              ${puuvili.kirjeldus}
             <p>
            
        
    </div>
    </div>
    </div>
    `
}

// funktsioon input

function lisapuuvili() {
    let nimetustekst = document.getElementById("nimetus").value
    let liiktekst = document.getElementById("liik").value
    let hinnangtekst = document.getElementById("hinnang").value

    //objekt

    let puuvili = {
    nimi: nimetustekst,
    varv: "orange",
    liik: liiktekst,
    hinnang: hinnangtekst,
    pilt: "./assets/orange-300x200.jpg",
    kirjeldus: "uus puuvili, kirjeldus puudub"

    }
    saadused.push(puuvili)
    naitapuuvilju()
}


function naitapuuvilju() {
    let valjundelement = document.getElementById("valjund")
    let valjundHTML = ''
    valjundHTML += '<div class="row">'
    for (let i = 0; i < saadused.length; i++) {
        valjundHTML += loopuuviljahtml(saadused[i])
    }
    valjundHTML += '</div>'
    valjundelement.innerHTML = valjundHTML
}

naitapuuvilju()