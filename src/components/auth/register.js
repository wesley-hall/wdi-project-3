import React from 'react'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        profilePicture: '',
        postCode: '',
        libraryDescription: '',
        libraryPicture: ''
      }
    }
  }

  render() {
    return (
      <div>
        <form className='registration'>

          <div>
            <input
              className="input"
              name="username"
              placeholder="Username"
              value={this.state.data.username}
            />
          </div>

          <div>
            <input
              className="input"
              name="email"
              placeholder="Email"
              value={this.state.data.email}
            />
          </div>


          <div>
            <input
              className="input"
              name="password"
              placeholder="Password"
              value={this.state.data.password}
            />
          </div>

          <div>
            <input
              className="input"
              name="passwordconfirmation"
              placeholder="Password Confirmation"
              value={this.state.data.passwordConfirmation}
            />
          </div>

          <div>
            <input
              className="input"
              name="profilePicture"
              placeholder="profilePicture"
              value={this.state.data.profilePicture}
            />
          </div>

          <div>
            <input
              className="input"
              name="postcode"
              placeholder="Post Code"
              value={this.state.data.postCode}
            />
          </div>

          <div>
            <p>Library Description: <br />
              <textarea name="textarea_1" value={this.state.data.libraryDescription} />
            </p>
          </div>

          <div>
            <input
              className="input"
              name="profilePicture"
              placeholder="profilePicture"
              value={this.state.data.profilePicture}
            />
          </div>

        </form>
      </div>

    )
  }
}
export default Register
