// seeds.js
const mongoose = require('mongoose')
const {dbURI} = require('../config/environment')
const Books = require('../models/book')
const User = require('../models/user')


mongoose.connect(dbURI, { useNewURLParser: true}, (err, db) => {
  db.dropDatabase()

  User.create([
    {
      username: 'Rich',
      email: 'rich@email',
      password: 'password',
      passwordConfirmation: 'password',
      libraryName: 'Richlibrary',
      location: {
        lat: 51.5,
        lng: 49
      },
      libraryPicture: 'someurl',
      libraryDescription: 'dusty',
      userRating: 4
    },
    {
      username: 'Jack',
      email: 'jack@email',
      password: 'password',
      passwordConfirmation: 'password',
      libraryName: 'jacklibrary',
      location: {
        lat: 51.5 ,
        lng: 49
      },
      libraryPicture: 'someurl',
      libraryDescription: 'dusty',
      userRating: 4
    },
    {
      username: 'Sumi',
      email: 'sumi@email',
      password: 'password',
      passwordConfirmation: 'password',
      libraryName: 'Sumilibrary',
      location: {
        lat: 51.5 ,
        lng: 49
      },
      libraryPicture: 'someurl',
      libraryDescription: 'dusty',
      userRating: 4
    }
  ])
    .then(users => console.log(`${users.length} users created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())

})
