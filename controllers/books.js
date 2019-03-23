const Book = require('../models/book')

function booksAll(req, res, next) {
  Book
    .find()
    .then(books => res.json(books))
    .catch(next)
}


function booksCreate(req, res) {
  Book
    .create(req.body.book)
    .then(book => res.status(201).json(book))
    .catch(err=> res.status(500).json(err))
}

function booksShow(req, res) {
  Book
    .findById(req.params.id)
    .exec()
    .then(book => {
      if(!book) {
        return res.status(404).json({message: 'Could not find a book with that id'})
      }
      return res.status(200).json(book)
    })
    .catch(err => res.status(500).json(err))
}

function booksUpdate(req, res) {
  Book
    .findByIdandUpdate(req.params.id, req.body, { new: true, runValidators: true})
    .exec()
    .then(book => res.status(200).json(book))
    .catch(err => res.status(500).json(err))
}

function booksDelete(req, res) {
  Book
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(err => res.status(500).json(err))
}

module.exports = {
  booksAll: booksAll,
  booksCreate: booksCreate,
  booksShow: booksShow,
  booksUpdate: booksUpdate,
  booksDelete: booksDelete
}
