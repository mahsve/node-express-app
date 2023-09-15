const express = require('express')
const hbs = require('hbs');
const app = express()
const port = 3000

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/components');

// MIDDLE WARE
app.use(express.static('public'))

// ROUTING
app.get('/', (req, res) => {
  res.render('home', {
    pagina: 'Inicio',
    nombre: 'Miguel Herrera',
    titulo: 'Curso de Node'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    pagina: 'Articulo',
    nombre: 'Miguel Herrera',
    titulo: 'Curso de Node'
  })
  // res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    pagina: 'Elementos',
    nombre: 'Miguel Herrera',
    titulo: 'Curso de Node'
  })
  // res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}/`)
})