import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'


class BookShow extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        review: {
          review: ''
        },
        rating: {
          rating: ''
        }
      }
    }

    this.handleDeleteReview = this.handleDeleteReview.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleReviewChange = this.handleReviewChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this)
    this.handleRatingSubmit = this.handleRatingSubmit.bind(this)
  }

  componentDidMount() {
    {Auth.getPayload().sub && this.getUserLocation()}
    this.getBookData()
  }

  getBookData() {
    axios.get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data }))
  }

  handleEdit(e) {
    e.preventDefault()
  }

  handleBack() {
    this.props.history.push('/books')
  }

  handleReviewChange({ target: { name, value }}) {
    const review = {...this.state.data.review, [name]: value }
    const data = {...this.state.data, review}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors})
  }

  handleReviewSubmit(e) {
    e.preventDefault()
    axios.post(`/api/books/${this.props.match.params.id}/review`, this.state.data.review,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => {
        const data = {...this.state.data, review: {...this.state.data.review, review: ''}}
        this.setState({ data }, this.getBookData)
      })
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  handleRatingChange({ target: { name, value }}) {
    console.log(this.state.data.rating)
    const rating = {...this.state.data.rating, [name]: value}
    const data = {...this.state.data, rating}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors})
  }

  handleRatingSubmit(e) {
    e.preventDefault()
    console.log('posting data', this.state.data)
    axios.post(`/api/books/${this.props.match.params.id}/rating`, this.state.data.rating,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => {
        const data = {...this.state.data, rating: {...this.state.data.rating, rating: ''}}
        this.setState({ data }, this.getBookData)
      })
      .catch(err => this.setState({errors: err.response.data.errors}))
  }


  handleDelete(e) {
    e.preventDefault()
    console.log(`Bearer ${Auth.getToken()}`)
    if (window.confirm('Delete the item?')) {
      axios.delete(`/api/books/${this.props.match.params.id}`,
        { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
        .then(() => this.props.history.push('/books/'))
        .catch(err => this.setState({errors: err.response.data.errors}))
    }
  }

  handleDeleteReview(review) {
    axios.delete(`/api/books/${this.props.match.params.id}/review/${review._id}`,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.getBookData())
      .catch(err => console.log(err))
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

  hasReview() {
    return this.state.book.review.some(review => review.user._id === Auth.getPayload().sub)
  }

  hasRating() {
    return this.state.book.rating.some(rating => rating.user._id === Auth.getPayload().sub)
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
                      <button className="button is-warning is-pulled-right" onClick={this.handleBack}>&lt; Back</button>
                      <br />
                      <br />
                      <Link to={`/books/${book._id}/loan`}>
                        <button className="button is-success is-pulled-right">Request to borrow</button>
                      </Link>
                    </div>
                  }
                </div>
              </div>
            </div>

            <hr />

            <div className="columns">
              <div className="column is-third">
                <figure className="image bookCoverWrapper">
                  <img id="bookCoverImage" src={book.image} alt={book.title} />
                </figure>
              </div>

              <div className="column is-two-thirds">

                <div className="columns">

                  <div className="column is-half">
                    <h4 className="is-7">Genre: {book.genre.genre} [{book.fiction ? 'Fiction' : 'Non-fiction'}]</h4>
                    <h4 className="is-7">Rating: {this.ratingAverage(book.rating).toFixed(1)} ({book.rating.length})</h4>

                    {!this.hasRating() && Auth.getPayload().sub &&
                      <form onSubmit={this.handleRatingSubmit}>

                        <div className="control"
                          onChange={this.handleRatingChange}>
                          <label className="radio">
                            <input type="radio" name="rating" value="1"/>
                          </label>
                          <label className="radio">
                            <input type="radio" name="rating" value="2"/>
                          </label>
                          <label className="radio">
                            <input type="radio" name="rating" value="3"/>
                          </label>
                          <label className="radio">
                            <input type="radio" name="rating" value="4"/>
                          </label>
                          <label className="radio">
                            <input type="radio" name="rating" value="5"/>
                          </label>

                          <button disabled={!this.state.data.rating.rating}
                            className="button buttonAddRating is-success is-pulled-left is-small">Add rating: {!this.state.data.rating.rating && <p>&nbsp;?</p>}
                            {this.state.data.rating.rating && this.state.data.rating.rating}</button>

                        </div>
                      </form>
                    }

                  </div>

                  <div className="column is-half">
                    <h4 className="is-pulled-right">
                      Library: {book.owner.libraryName}
                      {Auth.isAuthenticated() &&
                      <span> ({this.calculateDistance(
                        book.owner.location.lat,
                        book.owner.location.lng,
                        this.state.userLat,
                        this.state.userLng)}km)
                      </span>}
                    </h4>
                  </div>
                </div>
                <br />
                <h5 className="bookDescription subtitle is-6">{book.description}</h5>

              </div>
            </div>
            <hr />
            <div className="container">
              {(book.review.length>0) &&
                <div>
                  <h4 className="is-7">Reviews({book.review.length}):</h4>
                  <br />
                </div>
              }
              {(book.review.length>0) && book.review.map(review => (
                <div key={review._id}>
                  <div className="columns">

                    <div className="column is-2">
                      <figure className="image is-96x96">
                        <img className="is-rounded" src={review.user.profilePicture} />
                      </figure>
                      <br />
                    </div>
                    <div className="column">
                      <h4 className="title is-6" >{review.user.username}</h4>
                      <h4 className="bookReviews subtitle is-6" >{review.review}</h4>

                      {(review.user._id === Auth.getPayload().sub) &&
                        <div>

                          <button
                            className="button is-danger is-pulled-right"
                            onClick={() => this.handleDeleteReview(review)}>
                          Delete review
                          </button>
                        </div>
                      }
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
              {!this.hasReview() && Auth.getPayload().sub &&
                <div className="columns">
                  <div className="column">
                    <h4 className="title is-6" >Add review...</h4>
                    <form onSubmit={this.handleReviewSubmit}>
                      <textarea
                        className="textarea"
                        name="review"
                        placeholder="Review"
                        value={this.state.data.review.review}
                        onChange={this.handleReviewChange}
                      />

                      <div>
                        <br />
                        <button
                          className="button is-success is-pulled-right"
                          onClick={this.handleReviewSubmit}>
                        Add review
                        </button>
                      </div>
                    </form>
                  </div>
                </div>}
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default BookShow
