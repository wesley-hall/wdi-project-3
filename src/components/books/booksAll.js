import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class BooksAll extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.fiction = ''
  }

  componentDidMount() {
    axios.get('/api/books')
      .then(res => this.setState({ books: res.data }))
  }

  render() {
    console.log(this.state.books)
    return (
      <main className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {!this.state.books && <p>...loading</p>}
            {this.state.books && this.state.books.map(book => (

              <div key={book._id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">

                <div className="card">
                  <div className="card-header">
                    <div className="card-image">
                      <figure className="image">
                        <img src={book.image} alt={book.title} />
                      </figure>
                    </div>
                  </div>

                  <div className="card-content">
                    <h4 className="title is-6">{book.title}</h4>
                    <h5 className="title is-7">by: {book.authors[0]}</h5>
                    <h5 className="subtitle is-7">Genre: {book.genre}</h5>
                    <h5 className="subtitle is-7">{book.fiction ? 'Fiction' : 'Non-fiction'}</h5>
                    <h5 className="subtitle is-7">Rating: {book.rating[0].rating}</h5>
                    <h5 className="subtitle is-7">Location: {book.owner.location}</h5>
                    <h5 className="subtitle is-7">Return Date: {book.returnDate}</h5>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </main>
    )
  }
}
export default BooksAll


// <Link to={`/books/${book._id}`} >
// </Link>
