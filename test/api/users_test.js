/* globals api, expect, describe, beforeEach, afterEach, it */
require('../spec_helper')

const Book = require('../../models/book')
const User = require('../../models/user')
const { secret } = require('../../config/environment')

const jwt = require('jsonwebtoken')

let token

describe('Book tests', () => {

  afterEach(done => {
    Book.collection.remove()
    done()
  })

  beforeEach(done => {
    Book.collection.remove()
    Book.create({
      title: 'The Name of the Wind',
      authors: 'Patrick Rothfuss',
      image: 'https://images-na.ssl-images-amazon.com/images/I/91b8oNwaV1L.jpg',
      fiction: true,
      description: 'The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man\'s Fear.'
    })
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
  // title: {type: String, required: true},
  // authors: {type: String},
  // image: {type: String},
  // fiction: {type: Boolean, required: true},
  // genre: { type: mongoose.Schema.ObjectId, ref: 'BookGenre'},
  // description: {type: String},
  // rating: [ratingSchema],
  // review: [reviewSchema],
  // owner: { type: mongoose.Schema.ObjectId, ref: 'User'}

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
})
describe('POST /api/books', () => {
  console.log(token)
  it('should return a 201 response', done => {
    api
      .post('/api/books')
      .set({ 'Accept': 'application/json', 'Authorization': `Bearer ${token}`})
      .send({
        title: 'Molly\'s Game',
        authors: 'Molly Bloom',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51XLk1fcHdL._SX329_BO1,204,203,200_.jpg',
        fiction: false,
        description: 'When Molly Bloom was a little girl growing up in a small Colorado town, she watched her brothers win medals, ace tests, and receive high praise from everyone they met. Molly wanted nothing more than to bask in that glow a little herself, so she pushed herself too—as a student, as an athlete. She was successful but felt like she was always coming from behind. She wanted to break free, to find a life without rules and limits, a life where she didn\'t have to measure up to anyone or anything—where she could become whatever she wanted.'
      })
      .end((err, res) => {
        console.log(err)
        expect(res.status).to.eq(201)
        done()
      })
  })
})
