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
        loanedByMe: []
      },
      errors: {}
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    axios.get('/api/loans')
      .then(res => {
        const loanedFromMe = res.data.filter(loans => loans.book.owner._id === Auth.getPayload().sub)
        const loanedByMe = res.data.filter(loans => loans.borrower._id === Auth.getPayload().sub)
        console.log('loanedFromMe', loanedFromMe)
        console.log('loanedByMe', loanedByMe)
        const loans = {...this.state.loans, loanedFromMe, loanedByMe}
        console.log('loans', loans)
        this.setState({ loans })
      })

  }

  confirmBookReturn(e) {
    // console.log('in confirmBookReturn e is', e.target.value)
    axios.put(`/api/loans/${e.target.value}`,
      { body: { returned: new Date() }},
      { headers: { Authorization: `Bearer ${Auth.getToken()}` }})
      .then(res => console.log(res))
      .catch(err => console.log(err))
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
    return approved && !returned && new Date() < new Date(end)
  }

  isReturned(loan) {
    return loan.returned
  }

  isOverdue(loan) {
    const { end, approved, returned } = loan
    return approved && !returned && new Date() > new Date(end)
  }

  isPending(loan) {
    return !loan.approved
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
                    isOnLoan={this.isOnLoan}
                    confirmBookReturn={this.confirmBookReturn}
                    isReturned={this.isReturned}
                    isOverdue={this.isOverdue}
                    isPending={this.isPending}
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
                    isOnLoan={this.isOnLoan}
                    isReturned={this.isReturned}
                    isOverdue={this.isOverdue}
                    isPending={this.isPending}
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

// ----- After componentDidMoiunt(), add: -----
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
