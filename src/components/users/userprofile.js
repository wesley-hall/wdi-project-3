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
            <p>{lat}</p>
            <p>{lng}</p>
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
