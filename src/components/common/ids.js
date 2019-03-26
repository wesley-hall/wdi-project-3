import React from 'react'
import axios from 'axios'

class IdsAll extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/genres')
      .then(res => this.setState({ genres: res.data }))
      .catch(e => console.error(e))
    axios.get('/api/users')
      .then(res => this.setState({ users: res.data }))
      .catch(e => console.error(e))
    axios.get('/api/loans')
      .then(res => this.setState({ loans: res.data }))
      .catch(e => console.error(e))
  }


  render() {
    return (
      <main className="section">
        <div className="container">
          <h1>genre._id : genre.genre</h1>
          {!this.state.genres && <p>...loading</p>}
          {this.state.genres && this.state.genres.map(genre => (
            <div key={genre._id}>{genre._id} : {genre.genre}</div>
          ))}
        </div>
        <div className="container">
          <h1>users._id : ursers.username</h1>
          {!this.state.users && <p>...loading</p>}
          {this.state.users && this.state.users.map(user => (
            <div key={user._id}>{user._id} : {user.username}</div>
          ))}
        </div>
        <div className="container">
          <h1>loans._id</h1>
          {!this.state.loans && <p>...loading</p>}
          {this.state.loans && this.state.loans.map(loan => (
            <div key={loan._id}>{loan._id}</div>
          ))}
        </div>
      </main>
    )
  }
}
export default IdsAll

// {this.isOwner() && <Link className="button is-warning" to={`/bookjs/${book._id}/edit`}>Edit</Link>}
// {this.isOwner() && <button className="button is-danger" onClick={this.handleDelete}>Delete</button>}
