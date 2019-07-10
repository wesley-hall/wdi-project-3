const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { dbURI, port } = require('./config/environment')
const router = require('./config/routes')
const errorHandler = require('./lib/errorHandler')

const app = express()
mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true })


app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use('/api', router)

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.use(errorHandler)

app.listen(port, console.log(`Listening on ${port}`))

module.exports = app
