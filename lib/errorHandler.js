function errorHandler(err, req, res, next) {
  if (err.message === 'Unauthorized') {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  if (err.name === 'CastError') {
    return res.status(401).json({ message: 'Unauthorized. Token invalid.' })
  }

  if (err.name === 'ValidationError') {
    const errors = {}

    for (const field in err.errors) {
      errors[field] = err.errors[field].message
    }

    err.errors = errors

    return res.status(422).json({ message: 'Unprocessable Entity', errors })
  }

  res.status(500).json({ message: 'Internal Server Error'})
  next(err)
}

module.exports = errorHandler
