const env = process.env.NODE_ENV || 'dev'
const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/booker-${env}`
const secret = process.env.SECRET || 'shhh...secret'

module.exports = { env, dbURI, port, secret }
