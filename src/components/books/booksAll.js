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
      .catch(e => console.error(e))
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
                      <div className="card-image">
                        <figure className="image">
                          <img src={book.image} alt={book.title} />
                        </figure>
                      </div>
                    </div>

                    <div className="card-content">
                      <h4 className="title is-6">{book.title}</h4>
                      <h5 className="title is-7">by: {book.authors[0]}</h5>
                      <h5 className="subtitle is-7">Genre: {book.genre.genre}</h5>
                      <h5 className="subtitle is-7">{book.fiction ? 'Fiction' : 'Non-fiction'}</h5>
                      <h5 className="subtitle is-7">Rating: {this.ratingAverage(book.rating).toFixed(1)} ({book.rating.length})</h5>
                      <h5 className="subtitle is-7">Distance: {this.calculateDistance(book.owner.location.lat,book.owner.location.lng,51.514980, -0.070729)}km</h5>
                      <h5 className="subtitle is-7">Return Date: {book.returnDate}</h5>
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
