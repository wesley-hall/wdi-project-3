require('../spec_helper')

const Book = require('../../models/book')

// require('../../controllers/books')

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

// it('should return an array of books objects', done => {
//     api.get('/api/books')
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.body)
//           .and.be.an('array')
//           .and.have.all.keys([
//             'title',
//             'fiction'
//           ])
//         done()
//       })
//   })

  // 'authors',
  // 'image',
  // 'genre',
  // 'description',
  // 'rating',
  // 'review',
  // 'owner'
  // describe('GET /api/books/:id', () => {
  //
  //   let book
  //
  //   it('should return a 200 response', done => {
  //     api
  //       .get(`/api/books/${book.id}`)
  //       .set('Accept', 'application/json')
  //       .expect(200, done)
  //   })
  // })
  // .create(req.body)
  // .then(book => res.status(201).json(book))
  // .catch(err=> res.status(500).json(err))
})
