import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        profilePicture: '',
        postCode: '',
        libraryDescription: '',
        libraryPicture: ''
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name , value }}) {
    const data = {...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({data,errors})
  }
  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .catch(err => this.setState({errors: err.response.data.errors}))
  }


  render() {
    return (
      <div>

        <form
          className='update'
          onSubmit={this.handleSubmit}
        >

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
              name="password"
              placeholder="Password"
              value={this.state.data.password}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              className="input"
              name="passwordconfirmation"
              placeholder="Password Confirmation"
              value={this.state.data.passwordConfirmation}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              className="input"
              name="profilePicture"
              placeholder="profilePicture"
              value={this.state.data.profilePicture}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              className="input"
              name="postcode"
              placeholder="Post Code"
              value={this.state.data.postCode}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <p>Library Description: <br />
              <textarea
                name="textarea"
                value={this.state.data.libraryDescription}
                onChange={this.handleChange}
              />
            </p>
          </div>

          <div>
            <input
              className="input"
              name="libraryPicture"
              placeholder="libraryPicture"
              value={this.state.data.libraryPicture}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <button className="Register Button">Register</button>
          </div>

        </form>
      </div>

    )
  }
}
export default Register
