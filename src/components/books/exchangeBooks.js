import React from 'react'
// import axios from 'axios'

class Exchange extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        username: '',
        email: '',
        title: '',
        authors: '',
        message: ''
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange({ target: { name , value }}) {
    const data = {...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({data,errors})
  }

  // handleSubmit(e) {
  //   e.preventDefault()
  //   axios.post('api/:id/exchange', this.state.data)
  //     .catch(err => this.setState({errors: err.response.data.errors}))
  // }

  render() {
    return (
      <div>
        <form className='lendBook'>

          <div>
            <input
              className="input"
              name="username"
              placeholder="Username"
              value={this.state.data.username}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              className="input"
              name="email"
              placeholder="Email"
              value={this.state.data.email}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              className="input"
              name="title"
              placeholder="Book Title"
              value={this.state.data.title}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              className="input"
              name="author"
              placeholder="Author"
              value={this.state.data.authors}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <p>Message: <br />
              <textarea
                name="textarea_1"
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
    )
  }
}
export default Exchange
