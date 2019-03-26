const Book = require('../models/book')
require('../models/bookGenre')
require('../models/loan')

function booksAll(req, res) {
  Book
    .find()
    .populate('owner genre')
    .then(books => res.json(books))
    .catch(e => console.log(e))
}


function bookCreate(req, res) {
  console.log('adding book')
  // req.body.owner = req.currentUser
  // req.body.rating.user = req.currentUser
  // console.log('bookCreate on: ',req.body)
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
        return res.status(404).json({message: 'Could not find a book with that id'})
      }
      return res.status(200).json(book)
    })
    .catch(err => res.status(500).json(err))
}

function bookUpdate(req, res) {
  Book
    .findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    .exec()
    .then(book => res.status(200).json(book))
    .catch(err => res.status(500).json(err))
}

function bookDelete(req, res) {
  Book
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(err => res.status(500).json(err))
}

module.exports = {
  booksAll: booksAll,
  bookCreate: bookCreate,
  bookShow: bookShow,
  bookUpdate: bookUpdate,
  bookDelete: bookDelete
}
