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
    if (window.confirm('Delete the item?')) {
      axios.delete(`/api/users/${Auth.getPayload().sub}`,
        { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
        .then(() => {
          Auth.logout()
          this.props.history.push('/')
        })
        .catch(err => this.setState({errors: err.response.data.errors}))
    }
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

  addAltProfile(e){
    e.target.src = 'http://www.orjon.com/dev/booker/images/profile/noimage.jpg'
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

        <div className="container">

          <button
            className="button is-danger is-pulled-right"
            id="btndeleteuser"
            onClick={this.handleDelete} >
              Delete my account</button>

          <button className="button is-warning is-pulled-right" id="editbutton" onClick={this.handleEdit}>Edit details</button>

          <h4 className="title"> Your details </h4>
          <div className="is-divider"></div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="title is-6">Username:</p>
              <p>{username}</p>
            </div>
            <div className="column">
              <p className="title is-6">Email:</p>
              <p>{email}</p>
            </div>
          </div>
          <div>
            <figure className="image is-128x128">
              <p><img className="is-rounded" src={profilePicture} onError={this.addAltProfile}></img></p>
            </figure>
          </div>
        </div>

        <div className="container">
          <div className="is-divider"></div>
        </div>

        <div className="container">
          <div>
            <p className="title is-4">Library Description</p>
          </div>
          <div className="usercolumn">
            <p className="title is-6" id="libraryname">Library Name:</p>
            <p>{libraryName}</p>
          </div>

          <div className="usercolumn" id="librarypic">
            <p className="title is-6">Library Picture:</p>
            <img src={libraryPicture} onError={this.addAltImage} />
          </div>

          <div className="usercolumn">
            <p className="title is-6">Your current library location:</p>
          </div>
          <div className="usercolumn">
            <UserShowMap
              center={location}
            />
          </div>
          <div className="usercolumn">
            <p className="title is-6">Library Description:</p>
            <p>{libraryDescription || 'No library description'} </p>
          </div>
        </div>
      </main>
    )
  }
}
export default Userprofile
