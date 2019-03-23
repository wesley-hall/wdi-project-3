const router = require('express').Router()
const auth = require('../controllers/auth')
const books = require('../controllers/books')
const secureRoute = require('../lib/secureRoute')

router.post('/register', auth.register)

router.post('/login', auth.login)

router.get('/libraries', auth.librariesAll)

router.route('/books')
  .get(books.booksAll)
  .post(secureRoute, books.bookCreate)

router.route('/books/:id')
  .get(books.bookShow)
  .put(secureRoute, books.bookUpdate)
  .delete(secureRoute, books.bookDelete)

router.route('/books')
module.exports = router
