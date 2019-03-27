import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'


class BookShow extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount() {
    this.getUserLocation()
    axios.get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data }))
  }

  handleEdit(e) {
    e.preventDefault()
  }

  handleDelete(e) {
    e.preventDefault()
    console.log(`Bearer ${Auth.getToken()}`)
    axios.delete(`/api/books/${this.props.match.params.id}`,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/books/'))
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  isOwner() {
    return Auth.isAuthenticated() && this.state.book.owner._id ===Auth.getPayload().sub
  }

  getUserLocation() {
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => {
        const userLat = res.data.location.lat
        const userLng = res.data.location.lng
        this.setState({ userLat: userLat, userLng: userLng })
      })
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
            <div className="columns">
              <div className="column">
                <h2 className="title">{book.title}</h2>
                <h3 className="title is-4">by: {book.authors}</h3>
              </div>

              <div className="column">
                <div>

                  {this.isOwner() &&
                    <div>
                      <Link
                        className="button button-book-update is-warning is-pulled-right"
                        to={`/books/${book._id}/update`}>
                      Update details
                      </Link>
                      <br />
                      <br />
                      <button
                        className="button is-danger is-pulled-right"
                        onClick={this.handleDelete}>
                      Remove from library
                      </button>
                    </div>
                  }

                  {!this.isOwner() && Auth.isAuthenticated() &&
                    <div>
                      <Link to={`/books/${book._id}/loan`}>
                        <button className="button is-success is-pulled-right">Borrow this book</button>
                      </Link>
                      <br />
                      <br />
                      <br />
                      <h4 className="is-pulled-right">
                        {book.owner.libraryName} - {this.calculateDistance(
                          book.owner.location.lat,
                          book.owner.location.lng,
                          this.state.userLat,
                          this.state.userLng)}km
                      </h4>
                    </div>
                  }
                </div>
              </div>
            </div>


            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image bookCoverWrapper">
                  <img id="bookCoverImage" src={book.image} alt={book.title} />
                </figure>
              </div>
              <div className="column is-half">

                <h5 className="is-7">Genre: {book.genre.genre} [{book.fiction ? 'Fiction' : 'Non-fiction'}]</h5>
                <h5 className="is-7">Rating: {this.ratingAverage(book.rating).toFixed(1)} ({book.rating.length})</h5>
                <br />
                <h5 className="bookDescription subtitle is-6">{book.description}</h5>

              </div>
            </div>
            <hr />
            <div className="container">
            </div>

          </div>
        </main>
        )
      </div>
    )
  }
}

export default BookShow
