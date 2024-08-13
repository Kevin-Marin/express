const express = require('express')
const app = express()
const port = 5000

app.post("/geada", (req, res) => {
    res.send("Tá frio demais")
})

app.listen(port, () => {
    console.log("Conexão estabelecida")
})