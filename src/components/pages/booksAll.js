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
                <Link to={`/books/${book._id}`} >
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-header-title">{book.title}</h4>
                      <h5 className="title is-6">{book.authors[0]}</h5>
                    </div>
                    <div className="card-image">
                      <figure className="image">
                        <img src={book.image} alt={book.title} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <h5 className="title is-6">{book.genre}</h5>
                      <h5 className="title is-6">{book.fiction}</h5>
                      <h5 className="title is-6">{book.description}</h5>
                      <h5 className="title is-6">{book.rating}</h5>
                      <h5 className="title is-6">{book.returnDate}</h5>
                      <h6 className="subtitle is-6">{book.owner.libraryName}</h6>
                      <h6 className="subtitle is-6">{book.owner.location}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  }
}
export default BooksAll
