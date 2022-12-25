const express = require("express")
const app = express()

function tervitus2 (req, res) {
    res.end("<h1>Tere k6ik see pere, ytleb luukere<h1>")
}



app.get("/", function(req, res){
    res.end("Tere maailm")
})

app.get("/tervitus2", tervitus2)

app.listen(3000)