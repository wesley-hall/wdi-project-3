import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import BookForm from './bookForm'

class BookUpdate extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        rating: {},
        review: {}
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleReviewChange = this.handleReviewChange.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getUserId = this.getUserId.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }), this.getGenres())
      .catch(err => console.log(err))
  }

  getGenres() {
    axios.get('/api/genres')
      .then(res => {
        this.setState({ genres: res.data })
      })
      .catch(err => console.log(err))
  }

  handleBack() {
    this.props.history.push('/books')
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors})
  }

  handleRatingChange({ target: { name, value }}) {
    const rating = {...this.state.data.rating, [name]: value}
    const data = {...this.state.data, rating}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors})
  }

  handleReviewChange({ target: { name, value }}) {
    const review = {...this.state.data.review, [name]: value}
    const data = {...this.state.data, review}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors})
  }

  handleSwitch({ target }) {
    const data = {...this.state.data, [target.name]: target.checked }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.put(`/api/books/${this.props.match.params.id}`, this.state.data,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => {
        this.props.history.push(`/books/${this.props.match.params.id}`)
      })
      .catch(err => {
        this.setState({errors: err.response.data.errors})
      })
  }

  getUserId() {
    return Auth.getPayload().sub
  }

  render() {
    return (
      <div>
        <main className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="title">Update a book</h2>
              </div>
              <div className="column">
                <button className="button is-warning is-pulled-right" onClick={this.handleBack}>&lt; Back</button>
              </div>
            </div>
            <hr />
            <BookForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleRatingChange={this.handleRatingChange}
              handleReviewChange={this.handleReviewChange}
              handleSwitch={this.handleSwitch}
              data={this.state.data}
              genres={this.state.genres}
              errors={this.state.errors}
            />
          </div>
        </main>
      </div>
    )
  }
}

export default BookUpdate
