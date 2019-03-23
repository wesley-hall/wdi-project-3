const router = require('express').Router()
const auth = require('../controllers/auth')
const books = require('../controllers/books')

router.post('/register', auth.register)

router.post('/login', auth.login)

router.get('/libraries', auth.librariesAll)

router.route('/books')
  .get(books.booksAll)
  .post(books.bookCreate)

router.route('/books/:id')
  .get(books.bookShow)
  .put(books.bookUpdate)
  .delete(books.bookDelete)

router.route('/books')
module.exports = router
