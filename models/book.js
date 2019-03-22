const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  rating: {type: Number, min: 1, max: 5},
  user_id: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

const reviewSchema = new mongoose.Schema({
  review: {type: String},
  user_id: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

const bookSchema = new mongoose.Schema({

  title: {type: String, required: true},
  authors: [{type: String}],
  image: {type: String},
  genre: {type: mongoose.Schema.ObjectId, ref: 'BookGenre', required: true},
  fiction: {type: Boolean, required: true},
  description: {type: String},
  rating: [ratingSchema],
  review: [reviewSchema],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User'},
  returnDate: {type: Date, required: true},
  borrower: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('BookSchema', bookSchema)
