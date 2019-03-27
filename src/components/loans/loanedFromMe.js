import React from 'react'


class LoanedFromMe extends React.Component {

  render() {
    const { loan, isReturned, isOnLoan, confirmBookReturn, isPending, isOverdue } = this.props
    return (
      <div>
        <div className="columns">
          <span className="column is-2 is-gapless">{loan.start.substring(10,-5)}</span>
          <span className="column is-2 is-gapless">{loan.end.substring(10,-5)}</span>
          <span className="column is-2 is-gapless">{loan.book.title}</span>
          <span className="column is-2 is-gapless">{loan.borrower.username}</span>
          {isReturned(loan) &&
              <div className="column is-4 is-gapless columns">
                <span className="column is-half is-gapless">Returned on<br /> {loan.returned && loan.returned.substring(10,-5)}</span>
                <div className="column is-half is-gapless">
                  <button className="button is-small is-info" onClick={this.handleClick}>
                    Rate borrower?
                  </button>
                </div>
              </div>
          }
          {isOnLoan(loan) &&
              <div className="column is-4 is-gapless columns">
                <span className="column is-half is-gapless">On loan</span>
                <div className="column is-half is-gapless">
                  <button className="button is-small is-warning" value={loan._id} onClick={confirmBookReturn}>
                    Confirm Book Returned
                  </button>
                </div>
              </div>
          }
          {isPending(loan) &&
            <div className="column is-4 is-gapless columns">
              <span className="column is-half is-gapless">Pending</span>
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
          {isOverdue(loan) &&
            <div className="column is-4 is-gapless columns">
              <span className="column is-half has-text-weight-bold has-text-danger is-gapless">Overdue</span>
              <div className="column is-half is-gapless">
                Remind {loan.borrower.username} to return {loan.book.title}
              </div>
            </div>
          }
        </div>
      </div>
    )

  }
}

export default LoanedFromMe

// this.props.onClick
// handleClick({ target: { name , value }}) {
//   const data = {...this.state.data, [name]: value}
//   const errors = {...this.state.errors, [name]: ''}
//   this.setState({data,errors})
// }

// this.props.isApproved(loan)
// isApproved(loan) {
//   return loan.approved
// }
//
// this.props.isOnLoan(loan)
// isOnLoan(loan) {
//   const { end, approved, returned } = loan
//   return approved && !returned && '2019-03-26T12:00:00.561Z' < end
// }
//
// this.props.isReturned(loan)
// isReturned(loan) {
//   return loan.returned
// }
//
// this.props.isOverdue(loan)
// isOverdue(loan) {
//   const { end, approved, returned } = loan
//   return approved && !returned && '2019-03-26T12:00:00.561Z' > end
// }
//
// this.props.isPending(loan)
// isPending(loan) {
//   return !this.isApproved(loan)
// }
