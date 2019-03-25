import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'

class LoansAll extends React.Component {
  constructor() {
    super()
    this.state = {
      loanedFromMe: [],
      loanedByMe: [],
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    axios.get('/api/loans')
      .then(res => {
        console.log(res.data[0].borrower.username)
        console.log('Hello', res.data)
        console.log('auth sub', Auth.getPayload().sub)
        console.log('abc', res.data.filter(loans => loans.book.owner === Auth.getPayload().sub))
        // .map(user => ({loanedFromMe: user.borrower, loanedByMe: user.owner}))
      })
      .then(res => this.setState({ loanedFromMe: res}))

  }


  handleChange({ target: { name , value }}) {
    const data = {...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({data,errors})
  }

  handleClick({ target: { name , value }}) {
    const data = {...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({data,errors})
  }

  render() {
    if (!this.state.loans) return null
    console.log(this.state)
    // const { loans } = this.state

    return (
      <div>
        <main className="section">
          <div className="container">
            <h1>My account</h1>
            <div>
              <div className="columns">
                <h2 className="column is-gapless">Books Loaned Out</h2>

                <div className="column is-gapless">
                  <select
                    name="booksLoaned"
                    defaultValue={2}
                    onChange={this.handleInputChange}
                  >
                    <option value="1">On Loan</option>
                    <option value="2">Pending Approval</option>
                    <option value="2">Returned</option>
                    <option value="3">Overdue</option>
                  </select>
                </div>
              </div>
              <div className="columns">
                <h4 className="column is-gapless">Start Date</h4>
                <h4 className="column is-gapless">End Date</h4>
                <h4 className="column is-gapless">Book Title</h4>
                <h4 className="column is-gapless">Author</h4>
                <h4 className="column is-gapless">Requested By</h4>
                <h4 className="column is-gapless">Status</h4>
                <h4 className="column is-gapless">Actions</h4>
              </div>
              {loans.map(loan => (
                <div key={loan._id}>
                  <div className="columns">
                    <h4 className="column is-gapless">{loan.start.substring(10,-5)}</h4>
                    <h4 className="column is-gapless">{loan.end.substring(10,-5)}</h4>
                    <h4 className="column is-gapless">{loan.book.title}</h4>
                    <h4 className="column is-gapless">{loan.book.authors}</h4>
                    <h4 className="column is-gapless">{loan.borrower.username}</h4>
                    <h4 className="column is-gapless">{loan.returned}</h4>
                    <h4 className="column is-gapless">{loan.approved}</h4>

                    <div>
                      <button
                        className="confirmReturned"
                        onClick={this.handleClick}
                      >Confirm Book Returned</button>
                    </div>

                    <div>
                      <button
                        className="Approve"
                        onClick={this.handleClick}
                      >Approve Loan</button>
                    </div>

                    <div>
                      <button
                        className="Reject"
                        onClick={this.handleClick}
                      >
                        Reject Loan</button>
                    </div>

                  </div>
                </div>
              ))}

              <hr />
            </div>

            <div>
              <div className="columns">
                <h2 className="column is-gapless">Books Borrowed</h2>
                <div className="column is-gapless">
                  <select
                    name="booksBorrowed"
                    defaultValue={2}
                    onChange={this.handleChange}
                  >
                    <option value="1">On Loan</option>
                    <option value="2">Pending Confirmation</option>
                    <option value="2">Returned</option>
                    <option value="3">Overdue</option>
                  </select>
                </div>
              </div>

              <div className="columns">
                <h4 className="column is-gapless">Start Date</h4>
                <h4 className="column is-gapless">End Date</h4>
                <h4 className="column is-gapless">Book Title</h4>
                <h4 className="column is-gapless">Author</h4>
                <h4 className="column is-gapless">Requested From</h4>
                <h4 className="column is-gapless">Status</h4>
                <h4 className="column is-gapless">Select</h4>
              </div>
              {loans.map(loan => (
                <div key={loan._id}>
                  <div className="columns">
                    <h4 className="column is-gapless">{loan.start.substring(10,-5)}</h4>
                    <h4 className="column is-gapless">{loan.end.substring(10,-5)}</h4>
                    <h4 className="column is-gapless">{loan.book.title}</h4>
                    <h4 className="column is-gapless">{loan.book.authors}</h4>
                    <h4 className="column is-gapless">{loan.borrower.username}</h4>
                    <h4 className="column is-gapless">{loan.returned}</h4>

                    <div>
                      <button
                        className="Cancel"
                        onClick={this.handleClick}
                      >
                      Cancel Loan Request</button>
                    </div>

                  </div>
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
