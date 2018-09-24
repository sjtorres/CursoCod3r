const express = require('express') // Importa o express
const app = express()  // Instaciar o express na constante app
const bodyParser = require('body-parser') // Importa o body-parser

app.use(bodyParser.urlencoded({ extended: true})) // associa app.use com o body-parser no modo extendido

// Atende uma requisição do tipo post em cima de usuarios
app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})

app.listen(3003) // Informa a porta que vai ser usada