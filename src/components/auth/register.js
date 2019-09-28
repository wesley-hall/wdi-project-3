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
        location: {
          lat: '',
          lng: ''
        },
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
                className={`input ${this.state.errors.username ? 'is-danger': ''}`}
                name="username"
                placeholder="* Username"
                value={this.state.data.username}
                onChange={this.handleChange}
              />
            </div>
            {this.state.errors.username && <small className="help is-danger">Username is Required</small> }
            <br />

            <div>
              <input
                className={`input ${this.state.errors.email ? 'is-danger': ''}`}
                name="email"
                placeholder="*Email address"
                value={this.state.data.email}
                onChange={this.handleChange}
              />
            </div>
            {this.state.errors.email && <small className="help is-danger">Email is Required</small> }
            <br />

            <div className="columns">
              <div className="column is-half">
                <input
                  className={`input ${this.state.errors.password ? 'is-danger': ''}`}
                  name="password"
                  type="password"
                  placeholder="*Password"
                  value={this.state.data.password}
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.password && <small className="help is-danger">Password is Required</small> }
              <br />

              <div className="column is-half">
                <input
                  className={`input ${this.state.errors.passwordConfirmation ? 'is-danger': ''}`}
                  name="passwordConfirmation"
                  type="password"
                  placeholder="*Password Confirmation"
                  value={this.state.data.passwordConfirmation}
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.passwordConfirmation && <small className="help is-danger">Passwords must match</small> }
            </div>

            <div>
              <input
                className="input"
                name="profilePicture"
                placeholder="Profile picture (url) - (optional)"
                value={this.state.data.profilePicture}
                onChange={this.handleChange}
              />
            </div>
            <br />

            <div>
              <label
                className={`label ${this.state.errors['location.lat'] ? 'is-danger': ''}`}>* Where are your books located? (Click to select)</label>
              <UserEditMap
                center={this.mapCenter}
                onSelectLocation={this.handleLocation}
              />
              {this.state.errors['location.lat'] && <small className="help is-danger">Please select a location on the map above.</small> }
            </div>
            <br />

            <div>
              <input
                className={`input ${this.state.errors.libraryName ? 'is-danger': ''}`}
                name="libraryName"
                placeholder="* Library Name"
                value={this.state.data.libraryName}
                onChange={this.handleChange}
              />
            </div>
            {this.state.errors.libraryName && <small className="help is-danger">Library Name is required</small> }
            <br />

            <div>
              <p>Library Description: <br />
                <textarea
                  className="textarea"
                  name="libraryDescription"
                  placeholder="Please enter a description of your library (optional)"
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
              <button className="button is-success is-pulled-right">Join now</button>
            </div>

          </form>
        </div>
      </main>
    )
  }
}
export default Register
