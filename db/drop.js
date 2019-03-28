const mongoose = require('mongoose')
const {dbURI} = require('../config/environment')

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()
})

console.log('Database dropped')
