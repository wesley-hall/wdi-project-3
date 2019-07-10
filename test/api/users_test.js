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
const invalidToken = jwt.sign({ sub: 12345 }, secret, { expiresIn: '6h' })

describe('Book tests', () => {

  afterEach(done => {
    Book.collection.deleteMany()
    done()
  })

  beforeEach(done => {
    Book.collection.deleteMany()
    Book.create(
      bookData
    )
      .then(() => User.deleteMany({}))
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
              'id',
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
          expect(res.status).to.eq(201)
          done()
        })
    })

    it('should respond with a JSON object', done => {
      api
        .post('/api/books')
        .set({ 'Accept': 'application/json', 'Authorization': `Bearer ${token}`})
        .send(bookData)
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8')
          done()
        })
    })

    it('should create a book object', done => {
      api
        .post('/api/books')
        .set({ 'Accept': 'application/json', 'Authorization': `Bearer ${token}`})
        .send(bookData)
        .end((err, res) => {
          const book = res.body

          expect(book)
            .to.be.an('object')

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

    it('should return a 401 response when no Auth header is sent', done => {
      api
        .post('/api/books')
        .set({ 'Accept': 'application/json'})
        .send(bookData)
        .end((err, res) => {
          expect(res.status).to.eq(401)
          done()
        })
    })

    it('should return a message of "Unauthorized" when no Auth header is sent', done => {
      api
        .post('/api/books')
        .set({ 'Accept': 'application/json'})
        .send(bookData)
        .end((err, res) => {
          expect(res.text).to.eq('{"message":"Unauthorized"}')
          done()
        })
    })

    it('should return a 401 response when an invalid token is sent', done => {
      api
        .post('/api/books')
        .set({ 'Accept': 'application/json', 'Authorization': `Bearer ${invalidToken}`})
        .send(bookData)
        .end((err, res) => {
          expect(res.status).to.eq(401)
          done()
        })
    })

    it('should return a message of "Unauthorized. Token invalid." when an invalid token is sent', done => {
      api
        .post('/api/books')
        .set({ 'Accept': 'application/json', 'Authorization': `Bearer ${invalidToken}`})
        .send(bookData)
        .end((err, res) => {
          expect(res.text).to.eq('{"message":"Unauthorized. Token invalid."}')
          done()
        })
    })
  })
  describe('GET /api/books/:id', () => {

    let book

    beforeEach(done => {
      Book
        .create(bookData)
        .then(booksData => {
          book = booksData
          done()
        })
        .catch(done)
    })

    it('should return a 200 response', done => {
      api
        .get(`/api/books/${book._id}`)
        .set('Accept', 'application/json')
        .expect(200, done)
    })

    it('should respond with a JSON object', done => {
      api
        .get(`/api/books/${book._id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8')
          done()
        })
    })

    it('should return a book object', done => {
      api
        .get(`/api/books/${book._id}`)
        .set({ 'Accept': 'application/json' })
        .send(bookData)
        .end((err, res) => {
          const book = res.body

          expect(book)
            .to.be.an('object')

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

  describe('DELETE /api/books/:id', () => {

    let book

    beforeEach(done => {
      Book
        .create(bookData)
        .then(booksData => {
          book = booksData
          done()
        })
        .catch(done)
    })

    it('should return a 204 response', done => {
      api
        .delete(`/api/books/${book._id}`)
        .set({ 'Accept': 'application/json', 'Authorization': `Bearer ${token}`})
        .expect(204, done)
    })

    it('should return an empty response body', done => {
      api
        .delete(`/api/books/${book._id}`)
        .set({ 'Accept': 'application/json', 'Authorization': `Bearer ${token}`})
        .end((err, res) => {
          expect(res.body)
            .to.be.empty
          done()
        })
    })

    it('should return a 401 response when no Auth header is sent', done => {
      api
        .delete(`/api/books/${book._id}`)
        .set({ 'Accept': 'application/json'})
        .expect(401, done)
    })

    it('should return a message of "Unauthorized" when no Auth header is sent', done => {
      api
        .delete(`/api/books/${book._id}`)
        .set({ 'Accept': 'application/json'})
        .end((err, res) => {
          expect(res.text).to.eq('{"message":"Unauthorized"}')
          done()
        })
    })

    it('should return a 401 response when an invalid token is sent', done => {
      api
        .delete(`/api/books/${book._id}`)
        .set({ 'Accept': 'application/json', 'Authorization': `Bearer ${invalidToken}`})
        .expect(401, done)
    })

    it('should return a message of "Unauthorized. Token invalid." when no Auth header is sent', done => {
      api
        .delete(`/api/books/${book._id}`)
        .set({ 'Accept': 'application/json', 'Authorization': `Bearer ${invalidToken}`})
        .end((err, res) => {
          expect(res.text).to.eq('{"message":"Unauthorized. Token invalid."}')
          done()
        })
    })

  })
})
