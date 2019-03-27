import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'


class BookLoan extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.handleDelete = this.handleDelete.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data }))
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

  render() {
    if (!this.state.book) return null
    const { book } = this.state
    return(
      <div>
        <main className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="title">LOAN LOAN LOAN{book.title}</h2>
                <h3 className="title is-4">by: {book.authors}</h3>
              </div>
              <div className="column">
                <div>
                  <button className="button is-warning is-pulled-right" onClick={this.handleCancel}>Cancel</button>
                  <br />
                  <br />
                  <br />
                  <h5 className="is-pulled-right is-7">Location: {book.owner.libraryName} 
                  ({this.calculateDistance(book.owner.location.lat,book.owner.location.lng,51.514980, -0.070729)}km)</h5>
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

                <h5 className="is-7">Availability:</h5>
                {book.existingLoans && book.existingLoans.map(loan => (
                  <h5 className="subtitle is-7" key={loan._id}>{loan.start} to {loan.end}</h5>))}

                <h5 className="is-7"></h5>
                <div className="columns">
                  <div className="column is-1">
                    {this.isOwner() && <Link
                      className="button is-warning"
                      to={`/bookjs/${book._id}/edit`}>Edit</Link>}
                  </div>
                  <div className="column is-1">
                    {this.isOwner() && <button className="button is-danger" onClick={this.handleDelete}>Delete</button>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        )
      </div>
    )
  }
}

export default BookLoan

// {book.existingLoans && book.existingLoans.map(loan => (
//   <h5 className="subtitle is-7" key={loan._id}>{loan.start} to {loan.end}</h5>))}
