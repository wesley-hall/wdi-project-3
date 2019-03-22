// seeds.js
const mongoose = require('mongoose')
const {dbURI} = require('../config/environment')
const Books = require('../models/book')
const BookGenre = require('../models/bookGenre')
const User = require('../models/user')
const Promise = require('bluebird')

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()

  const promiseArray = [
    User.create([
      {
        username: 'Rich',
        email: 'rich@email',
        password: 'password',
        passwordConfirmation: 'password',
        libraryName: 'Rich\'s library',
        location: {
          lat: 51.5,
          lng: 49
        },
        libraryPicture: 'someurl',
        libraryDescription: 'A library that\'s doubled as a dining room, where I could be surrounded by the books I love,”'
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
        libraryDescription: 'dusty'
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
        libraryDescription: 'dusty'
      }
    ]),
    BookGenre.create([
      {
        genre: 'cooking'
      },
      {
        genre: 'biography'
      },
      {
        genre: 'tragedy'
      },
      {
        genre: 'romance'
      },
      {
        genre: 'fantasy'
      },
      {
        genre: 'sci-fi'
      },
      {
        genre: 'diy'
      },
      {
        genre: 'art'
      },
      {
        genre: 'language'
      }
    ])
  ]

  Promise.all(promiseArray)
    .then(data => {
      const [ users, genres ] = data
      return Books.create([
        {
          title: 'Change We Can Believe in',
          authors: [ 'Barack Obama'],
          image: 'https://books.google.com/books/content?id=pK5ALFeVVcMC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
          fiction: false,
          genre: genres[0],
          description: 'Change We Can Believe In outlines Barack Obamas vision for America and its standing in the world.In these pages you will find bold and specific ideas about how Barack Obama plans to fix the ailing American economy and strengthen its middle class, make health care affordable for all, achieve energy independence, and keep America safe in a dangerous world. Change We Can Believe In asks us not just to believe in Barack Obamas ability to bring change to Washington, it asks us to believe in the ability of each of us to change the world',
          rating: [
            { rating: 4, user: users[0]}
          ],
          review: [
            {
              review: 'I had originally planned to give this book four stars for the outline of Obama\'s plan. But, in addition to the plan, seven of Obama\'s speeches are included at the back of the book. Among them is his "A More Perfect Union" speech that he gave in Philadelphia on March 18, 2008, where he confronted the issue of race in America. This speech alone is more than worthy of an additional star in my rating.',
              user: users[0]
            }
          ],
          owner: users[0],
          returnDate: new Date(),
          borrower: users[2]
        }
      ])
    })
    .then(books => console.log(`${books.length} books created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())

})
