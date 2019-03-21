const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const { dbURI, port } = require('./config/environment')

mongoose.connect(dbURI, { useNewUrlParser: true })

const app = express()

app.use(bodyParser.json())

app.listen(port, console.log(`Listening on ${port}`))
