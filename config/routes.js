const router = require('express').Router()
const auth = require('../controllers/auth')
const books = require('../controllers/books')

router.post('/register', auth.register)

router.post('/login', auth.login)

router.route('/books')
  .get(books.booksAll)
  .post(books.booksCreate)

router.route('/books/:id')
  .get(books.booksShow)
  .put(books.booksUpdate)
  .delete(books.booksDelete)

module.exports = router
