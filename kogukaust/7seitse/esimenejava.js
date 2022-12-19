let kasutajanimi = prompt()

// käsklus kus uus muutuja ehk variable, omistab parameetri lehel, id'lt HTMList "document.getElementById".
let tervitusElement = document.getElementById("tervitus")

  tervitus = "jou " + kasutajanimi

if (kasutajanimi.length == 0) {
    tervitus ="Unustasid sisestada nime"    
}

if (kasutajanimi.length >= 5) {
    tervitus = "jou jou " + kasutajanimi
}

// htmliga seondatud variableile omistatakse väärtus lõpuga ".innerHTML"
tervitusElement.innerHTML = tervitus

// alusta nr 1; kui muutuja on väiksem või võrdne 10ga ; lisa üks väärtus 

for (let muutuja = 1; muutuja <= 10; muutuja++) {
    console.log(muutuja)    
}

for (let tegija = 0; tegija < väärtused.length; tegija++) {
    const element = array tegija];
    
}