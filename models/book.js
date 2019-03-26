const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  rating: {type: Number, min: 1, max: 5},
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

const reviewSchema = new mongoose.Schema({
  review: {type: String},
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

const bookSchema = new mongoose.Schema({

  title: {type: String, required: true},
  authors: {type: String},
  image: {type: String},
  fiction: {type: Boolean, required: true},
  genre: { type: mongoose.Schema.ObjectId, ref: 'BookGenre'},
  description: {type: String},
  rating: [ratingSchema],
  review: [reviewSchema],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', autopopulate: true }
})

bookSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Book', bookSchema)
