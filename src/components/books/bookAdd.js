import React from 'react'
import axios from 'axios'

class BookAdd extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        title: '',
        authors: '',
        image: '',
        fiction: true,
        fictionrrr: true,
        genre: '',
        description: '',
        rating: {
          rating: ''
        },
        review: [],
        owner: ''
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    console.log('did mount')
    axios.get('/api/genres')
      .then(res => {
        this.setState({ genres: res.data })
      })
      .catch(err => console.log(err))
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({data,errors})
  }

  handleRatingChange({ target: { name, value }}) {
    const rating = {...this.state.data.rating, [name]: value}
    const data = {...this.state.data, rating}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors})
  }

  handleSwitch({ target }) {
    console.log('switching')
    const data = {...this.state.data, [target.name]: target.checked }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/books', this.state.data)
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  render() {
    return (
      <div>
        <main className="section">
          <div className="container">
            <h1>Add a new book to share:</h1>
            <form onSubmit={this.handleSubmit}>

              <div>
                <input
                  className="input"
                  name="title"
                  placeholder="*Title"
                  value={this.state.data.title}
                  onChange={this.handleChange}
                />
              </div>
              <br />

              <div>
                <input
                  className="input"
                  name="authors"
                  placeholder="*Author(s)"
                  value={this.state.data.authors}
                  onChange={this.handleChange}
                />
              </div>
              <br />

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

              <div className="control">
                <div className="select">
                  <select>
                    {this.state.genres && this.state.genres.map(genre => (
                      <option key={genre._id}>{genre.genre}</option>
                    ))}
                  </select>
                </div>
              </div>
              <br />

              <div className="control">
                <div className="field">
                  <input
                    id="fiction"
                    type="checkbox"
                    name="fiction"
                    className="switch is-success"
                    defaultChecked="checked"
                    onChange={this.handleSwitch}
                  />
                  <label htmlFor="fiction">{this.state.data.fiction ? 'Fiction' : 'Non-Fiction'}</label>
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

              <div>
                <div className="control">
                  <div className="select">
                    <select>
                      <option>Rating</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>
              <br />

              <div>
                <div className="control">
                  <p>Rating: {this.state.data.rating.rating && this.state.data.rating.rating}</p>
                  <input className="slider is-success" name="rating" onChange={this.handleRatingChange} step="1" min="1" max="5" value={this.state.data.rating.rating} type="range" />
                </div>
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
