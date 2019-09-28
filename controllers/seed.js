const mongoose = require('mongoose')
const Promise = require('bluebird')

const {dbURI} = require('../config/environment')

const Books = require('../models/book')
const BookGenre = require('../models/bookGenre')
const User = require('../models/user')
const Loan = require('../models/loan')

const { usersData, genresData, booksData, loansData } = require('../db/seedsData')

function seed(req, res) {
    let seedCount = []
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
                        seedCount.push(`${users.length} users created`)
                        seedCount.push(`${genres.length} genres created`)
                        return Promise.all([
                            Books.create(booksData(users, genres)),
                            users
                        ])
                    })
                    .then(data => {
                        const [ books, users ] = data
                        seedCount.push(`${books.length} books created`)
                        return Loan.create(loansData(books, users))
                    })
                    .then(loans => seedCount.push(`${loans.length} loans created`))
                    .catch(err => res.status(422).json(err))
                    .finally(() => {
                        mongoose.connection.close()
                        res.status(200).json({ message: 'Database seeded successfully', details: seedCount })
                    })
            })
    })
}

module.exports = { seed }
