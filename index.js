const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const { dbURI, port } = require('./config/environment')
const router = require('./config/routes')

const app = express()

mongoose.connect(dbURI, { useNewUrlParser: true })

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use('/api', router)

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))


app.listen(port, console.log(`Listening on ${port}`))
