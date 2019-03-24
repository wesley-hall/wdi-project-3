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
    if (!this.state.loans) return null
    console.log(this.state.loans)
    const { loans } = this.state
    return (
      <div>
        <main className="section">
          <div className="container">

            <h1>My account</h1>

            <div>
              <h2>Books Loaned Out</h2>
              {loans.map(loan => (
                <div key={loan._id}>
                  <h4>{loan.start}</h4>
                  <h4>{loan.end}</h4>
                  <h4>{loan.book.title}</h4>
                  <h4>{loan.borrower.username}</h4>
                  <h4>{loan.returned}</h4>
                  <h4>{loan.approved}</h4>

                  <p>Select:</p>
                  <select
                    name="booksLoaned"
                    defaultValue={2}
                    onChange={this.handleChange}
                  >
                    <option value="1">On Loan</option>
                    <option value="2">Pending Approval</option>
                    <option value="2">Returned</option>
                    <option value="3">Overdue</option>
                  </select>
                </div>
              ))}
            </div>

            <div>
              <h2>Books Borrowed</h2>
              {loans.map(loan => (
                <div key={loan._id}>
                  <h4>{loan.start}</h4>
                  <h4>{loan.end}</h4>
                  <h4>{loan.book.title}</h4>
                  <h4>{loan.borrower.username}</h4>
                  <h4>{loan.returned}</h4>

                  <p>Select:</p>
                  <select
                    name="booksBorrowed"
                    defaultValue={2}
                    onChange={this.handleChange}
                  >
                    <option value="1">Books Borrowed</option>
                    <option value="2">Waiting for Confirmation</option>
                    <option value="2">Returned</option>
                    <option value="3">Overdue</option>
                  </select>
                </div>
              ))}
            </div>

          </div>
        </main>
      </div>
    )
  }
}
export default LoansAll
