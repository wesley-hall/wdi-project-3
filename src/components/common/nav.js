import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/auth'

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {

    }

    this.userCurrent = '',
    this.logout = this.logout.bind(this)

  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  getUser() {
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => {
        this.userCurrent = res.data.username.charAt(0).toUpperCase() + res.data.username.slice(1)
        this.setState(this.userCurrent)
      })
  }

  componentDidMount() {
    this.getUser()
  }

  componentDidUpdate() {
    this.getUser()
  }


  render() {
    return (
      <nav className="navbar is-info">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Booker</Link>
          <Link to="/books" className="navbar-item">/Books</Link>
          <Link to="/libraries" className="navbar-item">/Libraries</Link>
          {Auth.isAuthenticated() && <Link to="/loans" className="navbar-item">/Loans</Link>}
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login/Register</Link>}
            {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout {this.userCurrent}</a>}
          </div>

        </div>

      </nav>
    )
  }
}

export default withRouter(Nav)
