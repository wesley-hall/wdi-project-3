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

  calculateDistance(lat1, lon1, lat2, lon2){
    const R = 6371e3
    const φ1 = lat1 * Math.PI / 180
    const φ2 = lat2 * Math.PI / 180
    const Δφ = (lat2-lat1) * Math.PI / 180
    const Δλ = (lon2-lon1) * Math.PI / 180
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    const d = R * c
    return (d/1000).toFixed(2)
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

                <h5 className="subtitle is-7">Genre: {book.genre.genre}</h5>
                <h5 className="is-7">{book.fiction ? 'Fiction' : 'Non-fiction'}</h5>
                <h5 className="is-7">Rating: {this.ratingAverage(book.rating).toFixed(1)} ({book.rating.length})</h5>
                <h5 className="is-7">dist:
                {this.calculateDistance(book.owner.location.lat,book.owner.location.lng,51.514980, -0.070729)}km</h5>
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
