//declaracion de constantes
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config()

const app = express()

//capturar el body
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

//conexion a la base de datos

//importar rutas

//ruta del Middleware
app.get('/', (req, res) =>{
    res.json({
        estado: true,
        mensaje: 'WORKS FINE'
    })
})

//INICIALIZAR SERVIDOR
const PORT = process.env.PORT || 3001
app.listen(PORT, () =>{
    console.log(`Servidor Corriendo: ${PORT}`)
})
