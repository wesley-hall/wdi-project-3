const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res, next) {
  User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      res.json({
        message: `Thanks for registering, ${user.username}`,
        token,
        user
      })
    })
    .catch(next)
}

function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorised' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      res.json({
        message: `Welcome back, ${user.username}`,
        token,
        user
      })
    })
    .catch(err => res.status(422).json(err))
}

function librariesAll(req, res) {
  User
    .find()
    .populate('booksOwned')
    .then(libraries => res.json(libraries.map(library => ({ libraryName: library.libraryName, location: library.location, books: library.booksOwned, owner: library._id }))))
    .catch(err => res.json(err))
}

module.exports = {
  register,
  login,
  librariesAll
}
