import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'


class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: { email: '',
        password: ''
      },
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const error = ''
    this.setState({ data, error })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/books')
      })
      .catch(() => {
        this.setState({ error: 'Invalid Credentials'})
      })
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <form
            className='update'
            onSubmit={this.handleSubmit}
          >

            <div>
              <input
                className="input"
                name="email"
                placeholder="Email"
                value={this.state.data.email}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                className="input"
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.data.password}
                onChange={this.handleChange}
              />
            </div>


            <div>
              <button className="Login Button">Login</button>
            </div>

          </form>
        </div>
      </main>

    )
  }
}

export default Login
