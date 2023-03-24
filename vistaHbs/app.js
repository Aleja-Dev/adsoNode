//Importar funciones de express
const express = require("express")


const hbs = require('hbs')

const app = express()

//Middleware
app.use(express.static("/public"))


//Cofigurar el sistema hbs
app.set('view engine', 'hbs')

//registrar la vistas parciales a través de la ruta 
hbs.registerPartials(__dirname + '/views/partials')


app.get("/", (req, res) => {
    res.render('index')
  })
  

  app.get("/clientes", (req, res) => {
    res.render('clientes', {

      nombre: "Alejandra",
      apellido: "Buitrago",
      documento: "1026130800"


    })
  })



app.listen(8080)