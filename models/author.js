const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  firstName: { type: String },
  middleName: { type: String },
  lastName: { type: String}

})

module.exports = mongoose.model('Author', authorSchema)
