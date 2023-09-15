const express = require('express')
const app = express()
const port = 3000

// MIDDLE WARE
app.use(express.static('public'))

// ROUTING
app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})