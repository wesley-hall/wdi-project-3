const router = require('express').Router()
const auth = require('../controllers/auth')
const books = require('../controllers/books')
const loans = require('../controllers/loans')
const genres = require('../controllers/genres')
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')

router.post('/register', auth.register)

router.post('/login', auth.login)

router.get('/genres', genres.genresAll)

router.get('/libraries', users.librariesAll)

router.get('/users', users.usersAll)

router.route('/users/:id')
  .get(users.userShow)
  .put(secureRoute, users.userUpdate)
  .delete(secureRoute, users.userDelete)

router.route('/books')
  .get(books.booksAll)
  .post(secureRoute, books.bookCreate)

router.get('/books/library/all', books.booksAll)
router.get('/books/library/:libraryId', books.booksFiltered)

router.route('/books/:id')
  .get(books.bookShow)
  .put(secureRoute, books.bookUpdate)
  .delete(secureRoute, books.bookDelete)

router.route('/books/:id/review')
  .post(secureRoute, books.reviewAdd)

router.route('/books/:id/review/:reviewId')
  .delete(secureRoute, books.reviewDelete)

router.get('/loans', loans.loansAll)

router.post('/books/:id/loan', secureRoute, loans.loanCreate)

router.route('/loans/:id')
  .get(loans.loanShow)
  .put(secureRoute, loans.loanUpdate)
  .delete(secureRoute, loans.loanDelete)


module.exports = router
