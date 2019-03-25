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
        fiction: '',
        genre: '',
        description: '',
        rating: [],
        review: [],
        owner: ''
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
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

  handleChange({ target: { name , value }}) {
    const data = {...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({data,errors})
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
            <form>

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


              <div>
                <div className="control">
                  <div className="select">
                    <select>
                      <option>Fiction/Non-Fiction?</option>
                      <option>Fiction</option>
                      <option>Non-Fiction</option>
                    </select>
                  </div>
                </div>
              </div>
              <br />

              <div>
                <input
                  className="input"
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
//
// <div className="column">
//   <div className="control">
//     <label className="radio">
//       <input
//         type="radio"
//         name="fiction"
//         checked
//         onChange={this.handleChange}
//       />
//       Fiction
//     </label>
//
//     <label className="radio">
//       <input
//         type="radio"
//         name="fiction"
//         onChange={this.handleChange}
//       />
//       Non-Fiction
//     </label>
//   </div>
// </div>
