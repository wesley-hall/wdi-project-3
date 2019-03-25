/* globals api, expect, describe, beforeEach, afterEach, it */
require('../spec_helper')

const Book = require('../../models/book')
const User = require('../../models/user')
const { secret } = require('../../config/environment')

const jwt = require('jsonwebtoken')

const bookData = {
  title: 'The Hobbit',
  authors: 'J.R.R Tolkien',
  image: 'http://www.orjon.com/dev/booker/images/bookcovers/cover-theHobbit.jpeg',
  fiction: true,
  description: ' In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.'
}

let token

describe('Book tests', () => {

  afterEach(done => {
    Book.collection.remove()
    done()
  })


  beforeEach(done => {
    Book.collection.remove()
    Book.create(
      bookData
    )
      .then(() => User.remove({}))
      .then(() => User.create({
        username: 'test',
        email: 'test',
        password: 'test',
        passwordConfirmation: 'test',
        location: {
          lat: 51.4,
          lng: 21
        },
        libraryName: 'test'

      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
        done()
      })

      .catch(done)
  })

  describe('GET /api/books', () => {

    it('should return a 200 response', done => {
      api
        .get('/api/books')
        .set('Accept', 'application/json')
        .expect(200, done)
    })

    it('should respond with a JSON object', done => {
      api
        .get('/api/books')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8')
          done()
        })
    })

    it('should return an array of books', done => {
      api
        .get('/api/books')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array')
          done()
        })
    })

    it('should return an array of book objects', done => {
      api.get('/api/books')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .and.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              '__v',
              '_id',
              'authors',
              'description',
              'fiction',
              'image',
              'rating',
              'review',
              'title'
            ])
          done()
        })
    })
  })
  describe('POST /api/books', () => {
    it('should return a 201 response', done => {
      api
        .post('/api/books')
        .set({ 'Accept': 'application/json', 'Authorization': `Bearer ${token}`})
        .send(bookData)
        .end((err, res) => {
          console.log(err)
          expect(res.status).to.eq(201)
          done()
        })
    })
    it('should create a book', done => {
      api
        .post('/api/books')
        .set({ 'Accept': 'application/json', 'Authorization': `Bearer ${token}`})
        .send(bookData)
        .end((err, res) => {
          const book = res.body
          expect(book)
            .to.have.property('_id')
            .and.to.be.a('string')

          expect(book)
            .to.have.property('title')
            .and.to.be.a('string')

          expect(book)
            .to.have.property('fiction')
            .and.to.be.a('boolean')

          done()
        })
    })
  })

})
