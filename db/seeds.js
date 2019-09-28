const mongoose = require('mongoose')
const Promise = require('bluebird')

const {dbURI} = require('../config/environment')

const Books = require('../models/book')
const BookGenre = require('../models/bookGenre')
const User = require('../models/user')
const Loan = require('../models/loan')

const { usersData, genresData, booksData, loansData } = require('./seedsData')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }, (err, db) => {
    db.dropDatabase()
      .then(() => {
        const promiseArray = [
          User.create(usersData()),
          BookGenre.create(genresData())
        ]
        
        Promise.all(promiseArray)
            .then(data => {
              const [ users, genres ] = data
              console.log(`${users.length} users created`)
              console.log(`${genres.length} genres created`)
              return Promise.all([
                Books.create(booksData(users, genres)),
                users
              ])
            })
            .then(data => {
              const [ books, users ] = data
              console.log(`${books.length} books created`)
              return Loan.create(loansData(books, users))
            })
            .then(loans => console.log(`${loans.length} loans created`))
            .catch(err => console.log(err))
            .finally(() => mongoose.connection.close())
      })
})
