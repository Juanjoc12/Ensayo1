'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/hola/:name', (req, res) =>{
	res.send({mensaje:`hola ${req.params.name}!`})
})

app.listen(3000, () =>{
	console.log('API REST correindo en el http://localhost3000')
})