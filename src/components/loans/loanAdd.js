import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

class LoanAdd extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        book: '',
        borrower: '',
        start: '',
        end: '',
        returned: '',
        approved: '',
        message: ''
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleChange({ target: { name , value }}) {
    const data = {...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({data,errors})
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('api/loans', this.state.data)
      .catch(err => this.setState({errors: err.response.data.errors}))
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
                <h5 className="subtitle is-7">{book.fiction ? 'Fiction' : 'Non-fiction'}</h5>
                <h5 className="subtitle is-7">Rating: {this.ratingAverage(book.rating).toFixed(1)} ({book.rating.length})</h5>

                <h5 className="subtitle is-7">Return Date: {book.returnDate}</h5>
                <h5 className="subtitle is-7">{book.description}</h5>

                <hr />
                {this.isOwner() && <Link className="button is-warning" to={`/bookjs/${book._id}/edit`}>Edit</Link>}
                {this.isOwner() && <button className="button is-danger" onClick={this.handleDelete}>Delete</button>}
              </div>
            </div>
          </div>


          <div>
            <form
              className='loanAdd'
              onSubmit={this.handleSubmit}
            >

              <div>
                <input
                  className="input"
                  name="startDate"
                  placeholder="Start Date"
                  value={this.state.data.start}
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <input
                  className="input"
                  name="endDate"
                  placeholder="End Date"
                  value={this.state.data.end}
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <input
                  className="input"
                  name="approved"
                  placeholder="Approved"
                  value={this.state.data.approved}
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <input
                  className="input"
                  name="returned"
                  placeholder="Returned"
                  value={this.state.data.returned}
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <p>Message: <br />
                  <textarea
                    className="textarea"
                    name="message"
                    value={this.state.data.message}
                    onChange={this.handleChange}
                  />
                </p>
              </div>

              <div>
                <button className="Submit Button">Submit</button>
              </div>

            </form>
          </div>
        </main>
          )
      </div>
    )
  }
}
export default LoanAdd
