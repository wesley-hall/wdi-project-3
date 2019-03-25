const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const User = require('../models/user')

function secureRoute(req, res, next) {
  if (!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' })

  const token = req.headers.authorization.replace('Bearer ', '')


  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => {
      if (err) reject(err)
      resolve(payload)
    })
  })
    .then(payload => User.findById(payload.sub))
    .then(user => {
      if (!user) return res.status(401).json({ message: 'Unauthorized' })
      next()
    })
    .catch(err => res.json(err))
}

module.exports = secureRoute
