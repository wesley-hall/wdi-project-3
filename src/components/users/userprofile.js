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
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleEdit(e) {
    e.preventDefault()
    this.props.history.push('/useredit')
  }

  handleDelete(e) {
    e.preventDefault()
    console.log(`Bearer ${Auth.getToken()}`)
    axios.delete(`/api/users/${Auth.getPayload().sub}`,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => {
        Auth.logout()
        this.props.history.push('/')
      })
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  getUser() {
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => this.setState({  currentUser: res.data }))
  }

  componentDidMount() {
    this.getUser()
  }

  addAltImage(e){
    e.target.src = 'http://www.orjon.com/dev/booker/images/libraries/libraryD.jpg'
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
            <div className="column">
              <button className="button is-warning is-pulled-right" id="editbutton" onClick={this.handleEdit}>Edit details</button>
            </div>
            <br />
            <div className="column">
              <button
                className="button is-danger is-pulled-right"
                onClick={this.handleDelete}>
            Delete my account
              </button>
            </div>
            <h4 className="title"> Your details </h4>
            <div className="column">
              <p>Username: {username} </p>
            </div>

            <div className="column">
              <p>Email: {email} </p>
            </div>

            <figure className="image is-128x128">
              <p><img className="is-rounded" src={profilePicture}></img></p>
            </figure>

            <div className="column">
              <p>Library Name: {libraryName} </p>
            </div>

            <div className="column" id="librarypic">
              <p>LibraryPicture:</p>
              <img src={libraryPicture} onError={this.addAltImage} />
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
