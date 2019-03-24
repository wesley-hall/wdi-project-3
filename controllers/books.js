const Book = require('../models/book')

function booksAll(req, res, next) {
  Book
    .find()
    .populate('owner')
    .then(books => res.json(books))
    .catch(next)
}


function bookCreate(req, res) {
  Book
    .create(req.body)
    .then(book => res.status(201).json(book))
    .catch(err=> res.status(500).json(err))
}

function bookShow(req, res) {
  Book
    .findById(req.params.id)
    .populate('owner')
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
