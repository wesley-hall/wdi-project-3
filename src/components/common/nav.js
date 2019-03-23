import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/auth'



class Nav extends React.Component {
  constructor() {
    super()


  }


  render() {
    return (
      <nav className="navbar is-info">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Booker</Link>
          <Link to="/books" className="navbar-item">/Books</Link>
          <Link to="/libraries" className="navbar-item">/Libraries</Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
            {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout</a>}
          </div>
        </div>

      </nav>
    )
  }
}

export default withRouter(Nav)
