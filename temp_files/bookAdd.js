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
        genre: '5c991a077f5b483bf7937d52',
        description: '1223',
        rating: [],
        review: [],
        owner: '5c991a077f5b483bf7937d49'
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
      .then(() => this.props.history.push('/books'))
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
                  placeholder="*Book title"
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

// <div className="control">
//   <div className="select">
//     <select>
//       {this.state.genres && this.state.genres.map(genre => (
//         <option key={genre._id} value={genre.genre}>{genre.genre}</option>
//       ))}
//     </select>
//   </div>
// </div>
// <br />
//
//
// <div>
//   <div className="control">
//     <div className="select">
//       <select>
//         <option>Fiction/Non-Fiction?</option>
//         <option value="true">Fiction</option>
//         <option value="false">Non-Fiction</option>
//       </select>
//     </div>
//   </div>
// </div>
// <br />
//
// <div>
//   <input
//     className="input"
//     name="description"
//     placeholder="Description"
//     value={this.state.data.description}
//     onChange={this.handleChange}
//   />
// </div>
// <br />
//
// <div>
//   <div className="control">
//     <div className="select">
//       <select value={this.state.data.rating} onChange={this.handleChange}>
//         <option defaultValue disabled>Rating</option>
//         <option value={1}>1</option>
//         <option value={2}>2</option>
//         <option value={3}>3</option>
//         <option value={4}>4</option>
//         <option value={5}>5</option>
//       </select>
//     </div>
//   </div>
// </div>
// <br />





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
