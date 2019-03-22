const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const { dbURI, port } = require('./config/environment')
const app = express()

mongoose.connect(dbURI, { useNewUrlParser: true })

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.listen(port, console.log(`Listening on ${port}`))
