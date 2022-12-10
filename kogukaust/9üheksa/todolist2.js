const sisuElement = document.getElementById("sisu")

function valjastayl (yl) {
    sisuElement.innerHTML += `
        <div>
        <div>${yl}</div>
    </div>
    `
}

const ylesanded = [
    "pese hambad"
    "joihjoihoi"
    "jgghuih"
]
for (let index = 0; index < ylesanded.length; index++) {
    const yl  = ylesanded [index]
    valjastayl(yl)
    
}
