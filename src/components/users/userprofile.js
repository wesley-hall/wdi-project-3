import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
import RegisterMap from '../auth/registerMap'

class Userprofile extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: { location: {}},
      userdata: {
      },
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
      .then(() => this.getUser())
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  getUser() {
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => this.setState({  currentUser: res.data }))
  }

  componentDidMount() {
    this.getUser()
  }

  render() {

    console.log(this.state.currentUser)
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
    // if (!this.state.currentUser) return null
    // console.log('auth sub', Auth.getPayload().sub)
    // console.log('I am all usersdata', this.state.userdata)
    console.log(lat, lng)
    return(
      <main className="section">
        <div className="columns">
          <div className="container">
            <h4 className="title"> Your details </h4>
            <div>
              <button className="button is-warning is-pulled-right" id="editbutton">Edit</button>
            </div>
            <div className="column">
              <p>Username: {username} </p>
            </div>

            <div className="column">
              <p>Email: {email} </p>
            </div>
            <div className="column">
              <p>Profile Picture: </p>
            </div>
            <div className="column">
              <p><img src={profilePicture}></img></p>
            </div>
            <div className="column">
              <p>Library Name: {libraryName} </p>
            </div>
            <div className="column">
              <p>LibraryPicture:</p>

              <p><img src={libraryPicture}></img></p>
            </div>
            <p>Your current library location: </p>
            <p>{lat}</p>
            <p>{lng}</p>
            <div>
              <p>Library Description: </p>
              <p>{libraryDescription} </p>
            </div>
          </div>
        </div>
        <div className="column">
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
              <RegisterMap
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
export default Userprofile
