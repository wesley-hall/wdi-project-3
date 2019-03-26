const router = require('express').Router()
const auth = require('../controllers/auth')
const books = require('../controllers/books')
const loans = require('../controllers/loans')
const genres = require('../controllers/genres')
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')

router.post('/register', auth.register)

router.post('/login', auth.login)

router.get('/libraries', auth.librariesAll)

router.get('/genres', genres.genresAll)

router.get('/users', users.usersAll)

router.route('/users/:id')
  .get(users.userShow)
  .put(secureRoute, users.userUpdate)

router.route('/books')
  .get(books.booksAll)
  .post(secureRoute, books.bookCreate)

router.route('/books/:id')
  .get(books.bookShow)
  .put(secureRoute, books.bookUpdate)
  .delete(secureRoute, books.bookDelete)

router.get('/loans', loans.loansAll)

router.post('/books/:id/loan', secureRoute, loans.loanCreate)

router.route('/loans/:id')
  .get(loans.loanShow)
  .put(secureRoute, loans.loanUpdate)
  .delete(secureRoute, loans.loanDelete)

router.route('/books')
module.exports = router
