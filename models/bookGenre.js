const mongoose = require('mongoose')

const bookGenreSchema = new mongoose.Schema({
  genre: { type: String, required: true }
})

module.exports = mongoose.model('BookGenre', bookGenreSchema)
