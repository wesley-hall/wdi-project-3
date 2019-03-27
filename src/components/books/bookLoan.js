import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'

class BookLoan extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.startDate= '',
    this.endDate= ''

    this.handleDelete = this.handleDelete.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  componentDidMount() {
    this.getUserLocation()
    axios.get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data }))
  }

  getUserLocation() {
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => {
        const userLat = res.data.location.lat
        const userLng = res.data.location.lng
        this.setState({ userLat: userLat, userLng: userLng })
      })
  }

  handleCancel() {

  }

  handleDelete() {
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

  filteredDates() {
    return this.state.book.existingLoans.filter(loan => new Date(loan.end) > new Date())
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
                  <button className="button is-warning is-pulled-right" onClick={this.handleCancel}>Cancel</button>
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
                <h4 className="is-7">Request book for the following dates:</h4>
                <form
                  className="update"
                  onSubmit={this.handleSubmit}
                >
                  <div className="columns">
                    <div className="column">
                      <h1>Collect:</h1>
                      <input
                        className="input"
                        name="startDate"
                        placeholder="YYYY-MM-DD"
                        value={this.state.startDate}
                        onChange={this.handleChange}
                      />
                      <h1>Return:</h1>
                      <input
                        className="input"
                        name="endDate"
                        placeholder="YYYY-MM-DD"
                        value={this.state.endDate}
                        onChange={this.handleChange}
                      />
                    </div>

                  </div>
                  <button className="Login button is-success is-pulled-right">
                    Request
                  </button>

                </form>

              </div>

            </div>

            <hr />
            <div className="container">
              <h4 className="is-7">Currently reserved for these dates:</h4>

              {book.existingLoans && this.filteredDates().map(loan => (
                <div key={loan._id}>
                  <h5 className="subtitle is-6" >
                    {loan.start.substring(10,-5)} to {loan.end.substring(10,-5)}
                  </h5>
                </div>))}
            </div>

          </div>
        </main>

      </div>
    )
  }
}

export default BookLoan
