const env = process.env.NODE_ENV || 'dev'
const port = process.env.NODE_PORT || 4000
const dbURI = process.env.DB_URI || `mongodb://localhost/book-a-book-${env}`
const secret = process.env.SECRET || 'shhh...secret'

module.exports = { env, dbURI, port, secret }
