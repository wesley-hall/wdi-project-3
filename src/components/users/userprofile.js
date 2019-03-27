import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import UserShowMap from '../common/userShowMap'

class Userprofile extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: { location: {} },
      errors: {}
    }
    this.mapCenter = {
      lat: 51.5,
      lng: -0.11

    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(e) {
    e.preventDefault()
    this.props.history.push('/userform')
  }

  getUser() {
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => this.setState({  currentUser: res.data }))
  }

  componentDidMount() {
    this.getUser()
  }

  render() {
    if (!this.state.currentUser.location.lat) return null
    console.log('state currentU', this.state.currentUser)
    console.log('location123', this.state.currentUser.location)
    const {
      email,
      username,
      profilePicture,
      libraryName,
      libraryPicture,
      libraryDescription,
      location
    } = this.state.currentUser
    return(
      <main className="section">
        <div className="columns">
          <div className="container">
            <h4 className="title"> Your details </h4>
            <div>
              <button className="button is-warning is-pulled-right" id="editbutton" onClick={this.handleEdit}>Edit details</button>
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
            <UserShowMap
              center={location}
            />
            <div>
              <p>Library Description: </p>
              <p>{libraryDescription} </p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
export default Userprofile
