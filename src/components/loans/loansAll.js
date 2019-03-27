import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'
import LoanedFromMe from './loanedFromMe'
import LoanedByMe from './loanedByMe'

class LoansAll extends React.Component {
  constructor() {
    super()
    this.state = {
      loans: {
        loanedFromMe: [],
        loanedByMe: [],
        refreshLoans: false
      },
      errors: {}
    }

    this.handleClick = this.handleClick.bind(this)
    this.confirmBookReturn = this.confirmBookReturn.bind(this)
    this.approveLoanRequest = this.approveLoanRequest.bind(this)
    this.declineLoanRequest = this.declineLoanRequest.bind(this)
    this.cancelLoanRequest = this.cancelLoanRequest.bind(this)
  }

  componentDidMount() {
    this.getLoans()
  }

  getLoans() {
    axios.get('/api/loans')
      .then(res => {
        const loanedFromMe = res.data.filter(loans => loans.book.owner._id === Auth.getPayload().sub)
        const loanedByMe = res.data.filter(loans => loans.borrower._id === Auth.getPayload().sub)
        loanedFromMe.sort((a, b) => new Date(a.start) - new Date(b.start))
        loanedByMe.sort((a, b) => new Date(a.start) - new Date(b.start))
        const loans = {...this.state.loans, loanedFromMe, loanedByMe}
        this.setState({ loans })
      })
  }

  confirmBookReturn(e) {
    console.log('in confirmBookReturn e is', e)
    axios({
      method: 'PUT',
      url: `/api/loans/${e.target.value}`,
      headers: {
        'Authorization': `Bearer ${Auth.getToken()}`
      },
      data: {
        returned: new Date()
      }
    })
      .then(() => this.getLoans())
      .catch(err => console.log(err))
  }


  approveLoanRequest(e) {
    console.log('in approveLoanRequest e is', e.target.value)
    axios({
      method: 'PUT',
      url: `/api/loans/${e.target.value}`,
      headers: {
        'Authorization': `Bearer ${Auth.getToken()}`
      },
      data: {
        approved: true
      }
    })
      .then(() => this.getLoans())
      .catch(err => console.log(err))
  }

  declineLoanRequest(e) {
    axios({
      method: 'PUT',
      url: `/api/loans/${e.target.value}`,
      headers: {
        'Authorization': `Bearer ${Auth.getToken()}`
      },
      data: {
        declined: true
      }
    })
      .then(() => this.getLoans())
      .catch(err => console.log(err))
  }


  cancelLoanRequest(e) {
    axios.delete(`/api/loans/${e.target.value}`,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.getLoans())
      .catch(err => console.log(err))
  }


  handleClick({ target: { name , value }}) {
    const data = {...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({data,errors})
  }

  isOnLoan(loan) {
    const { end, approved, returned } = loan
    return approved && !returned && new Date() < new Date(end)
  }

// isDeclined does not work... because approved: false is the same as approved not existing!! ??????????????????
  isDeclined(loan) {
    const { approved, declined } = loan
    return !approved && declined
  }

  isReturned(loan) {
    return loan.returned
  }

  isOverdue(loan) {
    const { end, approved, returned } = loan
    return approved && !returned && new Date() > new Date(end)
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
                  <LoanedFromMe
                    loan={loan}
                    handleClick={this.handleClick}
                    isPending={this.isPending}
                    approveLoanRequest={this.approveLoanRequest}
                    declineLoanRequest={this.declineLoanRequest}
                    isOnLoan={this.isOnLoan}
                    confirmBookReturn={this.confirmBookReturn}
                    isDeclined={this.isDeclined}
                    isOverdue={this.isOverdue}
                    isReturned={this.isReturned}
                  />
                </div>
              ))}

              <hr />
            </div>

            <div>
              <div className="columns">
                <h2 className="column is-gapless">Books Borrowed</h2>
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
                  <LoanedByMe
                    loan={loan}
                    handleChange={this.handleChange}
                    isPending={this.isPending}
                    cancelLoanRequest={this.cancelLoanRequest}
                    isOnLoan={this.isOnLoan}
                    isOverdue={this.isOverdue}
                    isReturned={this.isReturned}
                  />
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


// Only use these if we want dropdowns

// ----- Under this.state, add: -----
// this.handleChange = this.handleChange.bind(this)

// ----- After componentDidMount(), add: -----
// handleChange({ target: { name , value }}) {
//   const data = {...this.state.data, [name]: value}
//   const errors = {...this.state.errors, [name]: ''}
//   this.setState({data,errors})
// }

// ----- Inside return(), add: -----
// <div className="columns">
//   <h2 className="column is-gapless">Books Borrowed</h2>
//   <div className="column is-gapless">
//     <select
//       name="booksBorrowed"
//       defaultValue={2}
//       onChange={this.handleChange}
//     >
//       <option value="1">On Loan</option>
//       <option value="2">Pending Confirmation</option>
//       <option value="2">Returned</option>
//       <option value="3">Overdue</option>
//     </select>
//   </div>
// </div>

// <div>
//   <div className="columns">
//     <h2 className="column is-gapless">Books Borrowed</h2>
//     <div className="column is-gapless">
//       <select
//         name="booksBorrowed"
//         defaultValue={2}
//         onChange={this.handleChange}
//       >
//         <option value="1">On Loan</option>
//         <option value="2">Pending Confirmation</option>
//         <option value="2">Returned</option>
//         <option value="3">Overdue</option>
//       </select>
//     </div>
//   </div>
