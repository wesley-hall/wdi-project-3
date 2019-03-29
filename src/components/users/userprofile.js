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
    this.handleBack = this.handleBack.bind(this)
  }

  handleEdit(e) {
    e.preventDefault()
    this.props.history.push('/useredit')
  }

  handleBack() {
    this.props.history.push('/books')
  }

  handleDelete(e) {
    e.preventDefault()
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
      <div>
        <main className="section">
          <div className="container">
            <div className="columns">

              <div className="column">
                <h2 className="title">My details</h2>
              </div>

              <div className="column">
                <button className="button is-warning is-pulled-right" onClick={this.handleBack}>&lt; Back</button>
                <br />
                <br />
                <button
                  className="button is-danger is-pulled-right"
                  onClick={this.handleDelete}>Delete my account &#215;
                </button>

                <button className="button buttonBookUpdate is-pulled-right" id="editbutton" onClick={this.handleEdit}>Update details _?</button>
              </div>
            </div>
            <hr />
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

            <hr />

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
      </div>
    )
  }
}
export default Userprofile
