// main object

let uudis = {
    teema:"pealkiri",
    pilt:"./matkapildid/Untitled.jpg",
    kirjeldus:"tekst",
}

// objects

let uudis1 = {
    teema: "Uued matkarajad",
    pilt: "./matkapildid/Untitled.jpg",
    kirjeldus: "Uued põnevad retked ootavad, kõiki vanu ja uusi matkaklubi liikmeid",
}

let uudis2 = {
    teema: "esimene reis välismaal",
    pilt: "./matkapildid/Untitled.jpg",
    kirjeldus: "Meie klubi esimene välismaa matkaüritus, matkaretk Machu Picchusse",
}

let uudis3 = {
    teema: "Viimased vabad kohad",
    pilt: "./matkapildid/Untitled.jpg",
    kirjeldus: "Viimased vabad kohad matkaretkele Pääsküla rabas"
}

let uudids4 = {
    teema: "Matkauudis",
    pilt: "./matkapildid/Untitled.jpg",
    kirjeldus:"Selle matkauudise kirjeldus"
}




// array

let uudised = [uudis1, uudis2, uudis3, uudids4]

function uudisteHTML (uudis) {
    return `
    <div class="col-4 card">
        <img class="card-img-top" src="${uudis.pilt}"
         <div class="card-body">
              <div class="card-title">
                  <h1>
                  ${uudis.teema}
                  </h1>
             </div>
             <div class="card-text">
                <p>
                ${uudis.kirjeldus}
                </p>
                <a href="#" class="btn btn-primary">UUri lähemalt</a>
            </div>
        </div>
    </div>
    `
}



// väljastahtml

function naitaUudiseid() {
    let valjundelement = document.getElementById("valjund")
    let valjundHTML = ''
    for (let i = 0; i < uudised.length; i++) {
        valjundHTML += uudisteHTML(uudised[i])
    }
    valjundelement.innerHTML = valjundHTML
}

naitaUudiseid()