import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
import UserEditMap from '../common/userEditMap'

class UserForm extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: { location: {}},
      errors: {}
    }
    this.mapCenter = {
      lat: 51.5,
      lng: -0.11

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name , value }}) {
    const data = {...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.put(`/api/users/${Auth.getPayload().sub}`, this.state.data,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/users'))
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  handleDelete(e) {
    e.preventDefault()
    console.log(`Bearer ${Auth.getToken()}`)
    axios.delete(`/api/users/${this.props.match.params.id}`,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/users/'))
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  getUser() {
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => this.setState({  currentUser: res.data }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getUser()
  }

  render() {
    console.log('user data', this.state.currentUser)
    const {
      email,
      username,
      profilePicture,
      libraryName,
      libraryPicture,
      libraryDescription,
      location: {
        lat, lng
      }
    } = this.state.currentUser

    console.log(lat, lng)
    return(
      <main className="section">
        <div className="columns">
          <form
            onSubmit={this.handleSubmit}
          >

            <div>
              <input
                className="input"
                name="profilePicture"
                placeholder="Please submit a new Profile Picture (optional)"
                onChange={this.handleChange}
              />
            </div>
            <br />

            <div>
              <input
                className="input"
                name="email"
                placeholder="Please enter your Email Address (optional)"
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
                placeholder="Please enter a Library Name (optional)"
                onChange={this.handleChange}
              />
            </div>
            <br />

            <div>
              <p>Library Description: <br />
                <textarea
                  className="textarea"
                  name="libraryDescription"
                  placeholder="Please enter a description of your library (optional)"
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
                onChange={this.handleChange}
              />
            </div>
            <br />

            <div>
              <button className="button is-primary is-pulled-right">Submit</button>
            </div>

          </form>

        </div>

      </main>
    )
  }
}
export default UserForm
