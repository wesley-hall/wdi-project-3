const Book = require('../models/book')

function booksAll(req, res, next) {
  Book
    .find()
    .then(books => res.json(books))
    .catch(next)
}

module.exports = {
  booksAll: booksAll
}
