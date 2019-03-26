import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'

class BookAdd extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        owner: '',
        title: '',
        authors: '',
        image: '',
        fiction: false,
        genre: '',
        description: '',
        rating: {
          rating: '',
          user: ''
        },
        review: {
          review: '',
          user: ''
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
    const data = {...this.state.data, owner: user, rating: rating, review: review }
    console.log('did mount')
    axios.get('/api/genres')
      .then(res => {
        this.setState({ genres: res.data, data })
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
    e.preventDefault()
    axios.post('/api/books', this.state.data,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/books'))
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  getUserId() {
    return Auth.getPayload().sub
  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        <main className="section">
          <div className="container">
            <h1>Add a new book to share:</h1>
            <form onSubmit={this.handleSubmit}>

              <div className="columns">
                <div className="column">
                  <input
                    className="input"
                    name="title"
                    placeholder="*Title"
                    value={this.state.data.title}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="column">
                  <input
                    className="input"
                    name="authors"
                    placeholder="*Author(s)"
                    value={this.state.data.authors}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div>
                <input
                  className="input"
                  name="image"
                  placeholder="*Cover Image (url)"
                  value={this.state.data.image}
                  onChange={this.handleChange}
                />
              </div>
              <br />

              <div className="columns">
                <div className="column is-3">
                  <div className="control">
                    <div className="select">
                      <select
                        name="genre"
                        onChange={this.handleChange}>
                        {this.state.genres && this.state.genres.map(genre => (
                          <option key={genre._id} value={genre._id}>{genre.genre}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="column is-3">
                  <div className="control">
                    <div className="field">
                      <input
                        id="fiction"
                        type="checkbox"
                        name="fiction"
                        className="switch is-medium is-success"
                        onChange={this.handleSwitch}
                      />
                      <label htmlFor="fiction">{this.state.data.fiction ? 'Fiction' : 'Non-Fiction' }</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div>
                <textarea
                  className="textarea"
                  name="description"
                  placeholder="Description"
                  value={this.state.data.description}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <hr />

              <div className="control"
                onChange={this.handleRatingChange}>Rating: {this.state.data.rating.rating && this.state.data.rating.rating}
                <br />
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
              </div>
              <br />

              <div>
                <textarea
                  className="textarea"
                  name="review"
                  placeholder="Review"
                  value={this.state.data.review.review}
                  onChange={this.handleReviewChange}
                />
              </div>
              <br />

              <div>
                <button className="button is-success is-pulled-right">Add Book</button>
              </div>

            </form>
          </div>
        </main>
      </div>
    )
  }
}

export default BookAdd



              // <div>
              //   <div className="control">
              //     <p>Rating: {this.state.data.rating.rating && this.state.data.rating.rating}</p>
              //     <input className="slider is-success" name="rating" onChange={this.handleRatingChange} step="1" min="1" max="5" value={this.state.data.rating.rating} type="range" />
              //   </div>
              // </div>
              // <br />
