const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
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
    .catch(err => res.json(err))
}

module.exports = {
  register
}
