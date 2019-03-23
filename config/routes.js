const router = require('express').Router()
const auth = require('../controllers/auth')
const books = require('../controllers/books')
const loans = require('../controllers/loans')
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

router.route('/loans')
  .get(loans.loansAll)
  .post(secureRoute, loans.loanCreate)

router.route('/loans/:id')
  .get(loans.loanShow)
  .put(secureRoute, loans.loanUpdate)
  .delete(secureRoute, loans.loanDelete)

router.route('/books')
module.exports = router
