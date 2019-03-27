import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import BookForm from './bookForm'

class BookUpdate extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        rating: {
        },
        review: {

        }
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleReviewChange = this.handleReviewChange.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getUserId = this.getUserId.bind(this)
  
  }

  componentDidMount() {
    const user = this.getUserId()
    const rating = {...this.state.data.rating, user: user}
    const review = {...this.state.data.review, user: user}
    // const data = {...this.state.data, owner: user, rating: rating, review: review }
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

  handleChange({ target: { name, value }}) {
    console.log(this.state.data)
    const data = {...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({data,errors})
  }

  handleRatingChange({ target: { name, value }}) {
    console.log(this.state.data)
    const rating = {...this.state.data.rating, [name]: value}
    const data = {...this.state.data, rating}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors})
  }

  handleReviewChange({ target: { name, value }}) {
    console.log(this.state.data)
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
    console.log('submitting properly')
    e.preventDefault()
    axios.put(`/api/books/${this.props.match.params.id}`, this.state.data,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.getUserId())
      .then(() => this.props.history.push(`/books/${this.props.match.params.id}`))
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  getUserId() {
    return Auth.getPayload().sub
  }

  render() {
    if (!this.state.data.title) return null
    console.log('State.data:', this.state.data)
    console.log('params:', this.props.match.params)
    return (
      <div>
        <main className="section">
          <div className="container">
            <h1 className="title">Edit a book:</h1>
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
