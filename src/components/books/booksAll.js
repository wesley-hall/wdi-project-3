import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'

class BooksAll extends React.Component {
  constructor() {
    super()

    this.state = {
      search: '',
      filter: 'all'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    this.getBooks()
    this.getLibraries()
    {Auth.getPayload().sub && this.getUserLocation()}
  }

  getBooks() {
    axios.get(`/api/books/library/${this.state.filter}`)
      .then(res => {
        this.setState({ books: res.data })
      })
      .catch(err => console.error(err))
  }

  getUserLocation() {
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => {
        const userLat = res.data.location.lat
        const userLng = res.data.location.lng
        this.setState({ userLat: userLat, userLng: userLng })
      })
  }

  getLibraries() {
    axios.get('/api/libraries')
      .then(res => this.setState({ libraries: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    this.setState({ filter: e.target.value }, () => this.getBooks())
  }

  handleSearch(e) {
    this.setState({ search: e.target.value.substr(0, 20) })
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
    if (!this.state.books) return  <p>Loading...</p>
    const filteredBooks = this.state.books.filter(books => books.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || books.authors.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
    return (
      <div>
        <main className="section ">
          <div className="columns is-mobile">
            <div className="column is-quarter">
              <div className="field is-pulled-left">
                <div className="control">
                  <div className="select">
                    <select
                      name="libraries"
                      onChange={this.handleChange}
                      defaultValue="all"
                    >
                      <option value="all">All Libraries</option>
                      {this.state.libraries && this.state.libraries.map(library => (
                        <option key={library.owner} value={library.owner}>{library.libraryName}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-half">
              <div className="field has-addons is-center">
                <div className="control is-center">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search by title/author"
                    value={this.state.search}
                    onChange={this.handleSearch}
                  / >
                </div>
              </div>
            </div>

            <div className="column is-quarter">
              {Auth.isAuthenticated() && <Link to="/books/add" className="button button-add-book is-success is-pulled-right">Add a book to the library &#x3E;</Link>}
            </div>

          </div>

          <div className="container">

            <div className="columns is-mobile is-multiline">
              {!this.state.books && <p>Searching libraries...</p>}
              {this.state.books && filteredBooks.map(book => (

                <div key={book._id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                  <Link to={`/books/${book._id}`} >
                    <div className="card">
                      <div className="card-header is-horizontal-center">
                        <div className="card-image max-image-on-card">
                          <figure className="image">
                            <img src={book.image} alt={book.title} />
                          </figure>
                        </div>
                      </div>

                      <div className="card-content is-horizontal-center">
                        <h4 className="is-6">{book.title}</h4>
                        <h5 className="is-6">by: {book.authors}</h5>
                        <h6 className="is-7">Genre: {book.genre.genre} [{book.fiction ? 'Fiction' : 'Non-fiction'}]</h6>
                        <h6 className="is-7">Rating: {this.ratingAverage(book.rating).toFixed(1)} ({book.rating.length})</h6>
                        <h6 className="is-7">{book.owner.libraryName}
                          {Auth.isAuthenticated() && <span> ({this.calculateDistance(
                            book.owner.location.lat,
                            book.owner.location.lng,
                            this.state.userLat,
                            this.state.userLng)}km)
                          </span>}
                        </h6>
                      </div>
                    </div>
                  </Link>
                </div>

              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }
}
export default BooksAll
