import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class LoansAll extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  componentDidMount() {
    axios.get('/api/loans')
      .then(res => this.setState({ loans: res.data }))
  }

  render() {
    console.log(this.state.loans)
    return (
      <main className="section">
        <div className="container">
          <h1>loansAll</h1>
        </div>
      </main>
    )
  }
}
export default LoansAll
