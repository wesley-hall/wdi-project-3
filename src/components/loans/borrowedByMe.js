import React from 'react'


class BorrowedByMe extends React.Component {

  render() {
    const { loan, isOnLoan, isOverdue, isReturned } = this.props
    return (
      <div key={loan._id}>
        <div className="columns">
          <span className="column is-2 is-gapless">{loan.start.substring(10,-5)}</span>
          <span className="column is-2 is-gapless">{loan.end.substring(10,-5)}</span>
          <span className="column is-2 is-gapless">{loan.book.title}</span>
          <span className="column is-2 is-gapless"><figure className="image is-64x64"><img className="is-rounded" src={loan.book.owner.profilePicture} /></figure>{loan.book.owner.username}</span>

          {!isOnLoan(loan) && !isOverdue(loan) && !isReturned(loan) &&
            <div className="column is-4 is-gapless columns">
              <span className="column is-half is-gapless">Pending</span>
              <div className="column is-half is-gapless">
                <button className="button is-small is-danger" onClick={this.handleClick}>
                  Cancel request
                </button>
              </div>
            </div>
          }
          {isOnLoan(loan) &&
              <div className="column is-4 is-gapless columns">
                <span className="column is-half is-gapless">On loan</span>
                <div className="column is-half is-gapless">
                  <button className="button is-small is-info" onClick={this.handleClick}>
                    Rate/review book?
                  </button>
                </div>
              </div>
          }
          {isOverdue(loan) &&
              <div className="column is-4 is-gapless columns">
                <span className="column is-half has-text-weight-bold has-text-danger is-gapless">Overdue</span>
                <div className="column is-half is-gapless">
                  Please return {loan.book.title} to {loan.book.owner.username}
                </div>
              </div>
          }
          {isReturned(loan) &&
              <div className="column is-4 is-gapless columns">
                <span className="column is-half is-gapless">Returned on<br /> {loan.returned && loan.returned.substring(10,-5)}</span>
                <div className="column is-half is-gapless">
                  <button className="button is-small is-info" onClick={this.handleClick}>
                    Rate book?
                  </button>
                </div>
              </div>
          }

        </div>
      </div>
    )
  }
}

export default BorrowedByMe

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
