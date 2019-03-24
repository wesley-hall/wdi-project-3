require('../spec_helper')

const Book = require('../../models/book')

require('../../controllers/books')

describe('Books controller', () => {

  it('should return a 200 response', done => {
    api
      .get('/api/books')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
})
