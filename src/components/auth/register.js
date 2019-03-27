import React from 'react'
import axios from 'axios'

import UserEditMap from '../common/userEditMap'

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
        location: {},
        libraryName: '',
        libraryDescription: '',
        libraryPicture: ''
      },
      errors: {}
    }

    this.mapCenter = {
      lat: 51.5,
      lng: -0.11
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name , value }}) {
    const data = {...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors })
  }

  handleLocation(location) {
    const data = {...this.state.data, location}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({errors: err.response.data.errors}))
  }


  render() {
    return (
      <main className="section">
        <div className="container">
          <h1>Join the community...</h1>
          <form
            onSubmit={this.handleSubmit}
          >

            <div>
              <input
                className="input"
                name="username"
                placeholder="*Username"
                value={this.state.data.username}
                onChange={this.handleChange}
              />
            </div>
            <br />

            <div>
              <input
                className="input"
                name="email"
                placeholder="*Email address"
                value={this.state.data.email}
                onChange={this.handleChange}
              />
            </div>
            <br />

            <div className="columns">
              <div className="column is-half">
                <input
                  className="input"
                  name="password"
                  type="password"
                  placeholder="*Password"
                  value={this.state.data.password}
                  onChange={this.handleChange}
                />
              </div>

              <div className="column is-half">
                <input
                  className="input"
                  name="passwordConfirmation"
                  type="password"
                  placeholder="*Password Confirmation"
                  value={this.state.data.passwordConfirmation}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div>
              <input
                className="input"
                name="profilePicture"
                placeholder="Your profile picture (url)"
                value={this.state.data.profilePicture}
                onChange={this.handleChange}
              />
            </div>
            <br />

            <div>
              <label>Where are your books located? (drag pointer)</label>
              <UserEditMap
                center={this.mapCenter}
                onSelectLocation={this.handleLocation}
              />
            </div>
            <br />

            <div>
              <input
                className="input"
                name="libraryName"
                placeholder="Library Name"
                value={this.state.data.libraryName}
                onChange={this.handleChange}
              />
            </div>
            <br />

            <div>
              <p>Library Description: <br />
                <textarea
                  className="textarea"
                  name="libraryDescription"
                  placeholder="Please enter a description of your library"
                  value={this.state.data.libraryDescription}
                  onChange={this.handleChange}
                />
              </p>
            </div>
            <br />

            <div>
              <input
                className="input"
                name="libraryPicture"
                placeholder="Picture of your library (optional)"
                value={this.state.data.libraryPicture}
                onChange={this.handleChange}
              />
            </div>
            <br />

            <div>
              <button className="button is-success is-pulled-right">Join</button>
            </div>

          </form>
        </div>
      </main>
    )
  }
}
export default Register
