import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'

class BookShow extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data }))
  }

  isOwner() {
    return Auth.isAuthenticated() && this.state.book.owner._id ===Auth.getPayload().sub
  }

  ratingAverage(ratingArray) {
    let sum = 0
    for (let i=0; i < ratingArray.length; i++) {
      sum += ratingArray[i].rating
    }
    return sum/ratingArray.length
  }


  render() {
    if (!this.state.book) return null
    const { book } = this.state
    return(
      <div>
        <main className="section">
          <div className="container">
            <h2 className="title">{book.title}</h2>
            <h3 className="title is-4">by: {book.authors[0]}</h3>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={book.image} alt={book.title} />
                </figure>
              </div>
              <div className="column is-half">

                <h5 className="subtitle is-7">Genre: {book.genre}</h5>
                <h5 className="subtitle is-7">{book.fiction ? 'Fiction' : 'Non-fiction'}</h5>
                <h5 className="subtitle is-7">Rating: {this.ratingAverage(book.rating).toFixed(1)} ({book.rating.length})</h5>
                <h5 className="subtitle is-7">Location: {book.owner.location}</h5>
                <h5 className="subtitle is-7">Return Date: {book.returnDate}</h5>
                <h5 className="subtitle is-7">{book.description}</h5>

                <hr />
                {this.isOwner() && <Link className="button is-warning" to={`/bookjs/${book._id}/edit`}>Edit</Link>}
                {this.isOwner() && <button className="button is-danger" onClick={this.handleDelete}>Delete</button>}
              </div>
            </div>
          </div>
        </main>
        )
      </div>
    )
  }
}

export default BookShow

// review: [reviewSchema],
// owner: { type: mongoose.Schema.ObjectId, ref: 'User'},
// borrower: {type: mongoose.Schema.ObjectId, ref: 'User'}
