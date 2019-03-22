const mongoose = require('mongoose')

const bookGenreSchema = new mongoose.Schema({
  name: { type: [String], required: true }
})

module.exports = mongoose.model('BookGenre', bookGenreSchema)
