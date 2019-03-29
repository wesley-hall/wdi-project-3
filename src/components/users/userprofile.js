import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import UserShowMap from '../common/userShowMap'
import UserForm from './userForm'

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
                <h2 className="title">Your details</h2>
              </div>

              <div className="column">
                <button className="button is-warning is-pulled-right" onClick={this.handleBack}>&lt; Back
                </button>
                <br />
                <br />
                <button
                  className="button is-danger is-pulled-right"
                  onClick={this.handleDelete}>Delete my account &#215;
                </button>
                <button
                  className="button buttonBookUpdate is-pulled-right" id="editbutton" onClick={this.handleEdit}>Update details _?
                </button>
              </div>
            </div>
          </div>
          <hr />
          <UserForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleLocation={this.handleLocation}
            currentUser={this.state.currentUser}
            mapCenter={this.mapCenter}
            errors={this.state.errors}
          />

        </main>
      </div>
    )
  }
}
export default Userprofile
