import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class BooksAll extends React.Component {
  constructor() {
    super()

    this.state = {}
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
                    <h4 className="card-header-title">Title: {book.title}</h4>
                    <h5 className="title is-6">Author(s): {book.authors[0]}</h5>
                  </div>
                  <div className="card-image">
                    <figure className="image">
                      <img src={book.image} alt={book.title} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <h5 className="title is-6">Genre: {book.genre}</h5>
                    <h5 className="title is-6">Fiction: {book.fiction}</h5>
                    <h5 className="title is-6">Description: {book.description}</h5>
                    <h5 className="title is-6">Rating: {book.rating[0].rating}</h5>
                    <h5 className="title is-6">Review: {book.review[0].review}</h5>
                    <h5 className="title is-6">Return Date: {book.returnDate}</h5>
                    <h6 className="subtitle is-6">Owner: {book.owner}</h6>
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
