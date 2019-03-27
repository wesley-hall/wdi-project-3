import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'

class BookLoan extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        startDate: '',
        endDate: '',
        message: ''
      }
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleChange = this.handleChange.bind(this)
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

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const error = ''
    this.setState({ data, error })
  }

  handleBack() {
    this.props.history.push(`/books/${this.props.match.params.id}`)
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

  checkRequestDates() {
    
  }

  render() {
    if (!this.state.book) return null
    const { book } = this.state

    console.log(this.state.data)

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
                  <button className="button is-warning is-pulled-right" onClick={this.handleBack}>&lt; Back</button>
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
                <form
                  className="update"
                  onSubmit={this.handleSubmit}
                >
                  <div className="columns">
                    <div className="column">
                      <h1>Reqest collect date:</h1>
                      <input
                        className="input"
                        type="date"
                        name="startDate"
                        placeholder="YYYY-MM-DD"
                        value={this.state.startDate}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="column">
                      <h1>Return date:</h1>
                      <input
                        className="input"
                        type="date"
                        name="endDate"
                        placeholder="YYYY-MM-DD"
                        value={this.state.endDate}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <p>Message to book owner: <br />
                      <textarea
                        className="textarea"
                        name="message"
                        placeholder="Please enter a descriptive message"
                        value={this.state.message}
                        onChange={this.handleChange}
                      />
                    </p>
                  </div>
                  <br />
                  <button className="button is-success is-pulled-right">
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
