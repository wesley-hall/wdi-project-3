import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'

class LoansAll extends React.Component {
  constructor() {
    super()
    this.state = {
      loans: {
        loanedFromMe: [],
        loanedByMe: []
      },
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
        const loanedFromMe = res.data.filter(loans => loans.book.owner._id === Auth.getPayload().sub)
        const loanedByMe = res.data.filter(loans => loans.borrower._id === Auth.getPayload().sub)
        console.log('loanedFromMe', loanedFromMe)
        console.log('loanedByMe', loanedByMe)
        const loans = {...this.state.loans, loanedFromMe, loanedByMe}
        console.log('loans', loans)
        this.setState({ loans })
      })

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

  isApproved(loan) {
    return loan.approved
  }

  isOnLoan(loan) {
    const { end, approved, returned } = loan
    return approved && !returned && '2019-03-26T12:00:00.561Z' < end
  }

  isReturned(loan) {
    return loan.returned
  }

  isOverdue() {
    const { end, approved, returned } = this.state.loans.loanedByMe
    return approved && !returned && Date.now() > end
  }

  isPending(loan) {
    return !this.isApproved(loan)
  }



  render() {
    if (!this.state.loans.loanedFromMe && !this.state.loans.loanedByMe) return null
    console.log(this.state)
    const { loanedFromMe, loanedByMe } = this.state.loans

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
                <h4 className="column is-2 is-gapless">Start Date</h4>
                <h4 className="column is-2 is-gapless">End Date</h4>
                <h4 className="column is-2 is-gapless">Book Title</h4>
                <h4 className="column is-2 is-gapless">Requested By</h4>
                <h4 className="column is-2 is-gapless">Status</h4>
                <h4 className="column is-2 is-gapless">Actions</h4>
              </div>
              {loanedFromMe.map(loan => (
                <div key={loan._id}>
                  <div className="columns">
                    <h4 className="column is-2 is-gapless">{loan.start.substring(10,-5)}</h4>
                    <h4 className="column is-2 is-gapless">{loan.end.substring(10,-5)}</h4>
                    <h4 className="column is-2 is-gapless">{loan.book.title}</h4>
                    <h4 className="column is-2 is-gapless">{loan.borrower.username}</h4>
                    {this.isReturned(loan) &&
                        <div className="column is-4 is-gapless columns">
                          <h4 className="column is-half is-gapless">Returned on<br /> {loan.returned && loan.returned.substring(10,-5)}</h4>
                          <div className="column is-half is-gapless">
                            <button className="button is-small is-info" onClick={this.handleClick}>
                              Rate borrower?
                            </button>
                          </div>
                        </div>
                    }
                    {this.isOnLoan(loan) &&
                        <div className="column is-4 is-gapless columns">
                          <h4 className="column is-half is-gapless">On loan</h4>
                          <div className="column is-half is-gapless">
                            <button className="button is-small is-warning" onClick={this.handleClick}>
                              Confirm Book Returned
                            </button>
                          </div>
                        </div>
                    }
                    {this.isPending(loan) &&
                      <div className="column is-4 is-gapless columns">
                        <h4 className="column is-half is-gapless">Pending</h4>
                        <div className="column is-half is-gapless">
                          <button className="button is-small is-success" onClick={this.handleClick}>
                            Approve Loan
                          </button>
                          <button className="button is-small is-danger" onClick={this.handleClick}>
                            Reject Loan
                          </button>
                        </div>
                      </div>
                    }
                    {this.isOverdue(loan) && <p>Blah blah blah</p>}
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
                <h4 className="column is-2 is-gapless">Start Date</h4>
                <h4 className="column is-2 is-gapless">End Date</h4>
                <h4 className="column is-2 is-gapless">Book Title</h4>
                <h4 className="column is-2 is-gapless">Requested From</h4>
                <h4 className="column is-2 is-gapless">Status</h4>
                <h4 className="column is-2 is-gapless">Actions</h4>
              </div>
              {loanedByMe.map(loan => (
                <div key={loan._id}>
                  <div className="columns">
                    <h4 className="column is-2 is-gapless">{loan.start.substring(10,-5)}</h4>
                    <h4 className="column is-2 is-gapless">{loan.end.substring(10,-5)}</h4>
                    <h4 className="column is-2 is-gapless">{loan.book.title}</h4>
                    <h4 className="column is-2 is-gapless">{loan.book.owner.username}</h4>

                    {this.isPending(loan) &&
                      <div className="column is-4 is-gapless columns">
                        <h4 className="column is-half is-gapless">Pending</h4>
                        <div className="column is-half is-gapless">
                          <button className="button is-small is-danger" onClick={this.handleClick}>
                            Cancel request
                          </button>
                        </div>
                      </div>
                    }
                    {this.isOnLoan(loan) &&
                        <div className="column is-4 is-gapless columns">
                          <h4 className="column is-half is-gapless">On loan</h4>
                          <div className="column is-half is-gapless">
                            <button className="button is-small is-info" onClick={this.handleClick}>
                              Rate/review book?
                            </button>
                          </div>
                        </div>
                    }
                    {this.isOverdue(loan) &&
                        <div className="column is-4 is-gapless columns">
                          <h4 className="column is-half is-danger is-gapless">Overdue</h4>
                          <div className="column is-half is-gapless">
                            Lorem ipsum
                          </div>
                        </div>
                    }
                    {this.isReturned(loan) &&
                        <div className="column is-4 is-gapless columns">
                          <h4 className="column is-half is-gapless">Returned on<br /> {loan.returned && loan.returned.substring(10,-5)}</h4>
                          <div className="column is-half is-gapless">
                            <button className="button is-small is-info" onClick={this.handleClick}>
                              Rate book?
                            </button>
                          </div>
                        </div>
                    }

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
