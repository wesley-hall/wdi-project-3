import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'

class BookReview extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.handleReview = this.handleReview.bind(this)
  }

  componentDidMount() {
    const user = this.getUserId()
    const review = {...this.state.data.review, user: user}
    axios.get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data }))
  }

  getUserId() {
    return Auth.getPayload().sub
  }

  render() {
    if (!this.state.book) return null
    return(
      <div>
        <form
          className='addReview'
          onSubmit={this.handleSubmit}
        >
          <div>
            <p>Book Review: <br />
              <textarea
                className="textarea"
                name="bookReview"
                value={this.state.data.review}
                onChange={this.handleChange}
              />
            </p>
          </div>
          <div>
            <button className="Submit Button">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default BookReview
