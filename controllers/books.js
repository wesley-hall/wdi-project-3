const Book = require('../models/book')
require('../models/bookGenre')
require('../models/loan')

function booksAll(req, res) {
  Book
    .find()
    .populate('owner genre')
    .then(books => res.json(books))
    .catch(err => res.status(400).json(err))
}

function booksFiltered(req, res) {
  Book
    .find({ owner: req.params.libraryId })
    .populate('owner genre')
    .then(books => res.json(books))
    .catch(err => res.status(400).json(err))
}

function bookCreate(req, res) {
  Book
    .create(req.body)
    .then(book => res.status(201).json(book))
    .catch(err=> res.status(422).json(err))
}

function bookShow(req, res) {
  Book
    .findById(req.params.id)
    .populate('owner genre existingLoans')
    .exec()
    .then(book => {
      if(!book) {
        return res.status(404).json({ message: 'Could not find a book with that id' })
      }
      return res.status(200).json(book)
    })
    .catch(err => res.status(500).json(err))
}

function bookUpdate(req, res) {
  Book
    .findById(req.params.id)
    .then(book => {
      Object.assign(book, req.body)
      return book.save()
    })
    .then(book => {
      res.status(200).json(book)
    })
    .catch(err => {
      res.status(422).json(err)
    })
}


function bookDelete(req, res) {
  Book
    .findById(req.params.id)
    .deleteOne()
    .then(() => res.sendStatus(204))
    .catch(err => res.status(500).json(err))
}

function reviewDelete(req, res) {
  Book
    .findById(req.params.id)
    .then(book => {
      const review = book.review.id(req.params.reviewId)
      review.remove()
      return book.save()
    })
    .then(book => res.json(book))
    .catch(err => res.status(500).json(err))
}

function reviewAdd(req, res) {
  req.body.user = req.currentUser
  Book
    .findById(req.params.id)
    .populate('review')
    .then(book => {
      book.review.push(req.body)
      return book.save()
    })
    .then(book => res.json(book))
    .catch(err => res.status(422).json(err))
}


function ratingAdd(req, res) {
  req.body.user = req.currentUser
  Book
    .findById(req.params.id)
    .populate('rating')
    .then(book => {
      book.rating.push(req.body)
      return book.save()
    })
    .then(book => res.json(book))
    .catch(err => res.status(422).json(err))
}




module.exports = {
  booksAll: booksAll,
  booksFiltered: booksFiltered,
  bookCreate: bookCreate,
  bookShow: bookShow,
  bookUpdate: bookUpdate,
  bookDelete: bookDelete,
  reviewDelete: reviewDelete,
  reviewAdd: reviewAdd,
  ratingAdd: ratingAdd
}
