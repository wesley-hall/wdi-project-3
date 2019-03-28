import React from 'react'

import LoanReturned from './statusButtons/returned'
import LoanedOnLoan from './statusButtons/loanedOnLoan'
import LoanedPending from './statusButtons/loanedPending'
import LoanedOverdue from './statusButtons/loanedOverdue'
import LoanedAwaitingCollection from './statusButtons/loanedAwaitingCollection'

const LoanedFromMe = (props) => {
  const { loan, isPending, approveLoanRequest, declineLoanRequest, isDeclined, isAwaitingCollection, confirmBookCollected, isOnLoan, isOverdue, confirmBookReturn, isReturned  } = props
  return (
    <div>
      <div className={`columns is-vcentered loan-border-bottom ${isOverdue(loan) ? 'has-text-danger has-text-weight-bold' : ''}`}>
        <span className="column is-2 is-gapless">{loan.start.substring(10,-5)}</span>
        <span className="column is-2 is-gapless">{loan.end.substring(10,-5)}</span>
        <span className="column is-2 is-gapless">{loan.book.title}</span>
        <span className="column is-2 is-gapless"><figure className="image is-64x64"><img className="is-rounded" src={loan.borrower.profilePicture} /></figure>{loan.borrower.username}</span>
        {isDeclined(loan) &&
          <div className="column is-4 is-gapless columns">
            <span className="column is-full is-gapless">Declined</span>
          </div>
        }
        {isReturned(loan) &&
          <LoanReturned
            loan={loan}
          />
        }
        {isOnLoan(loan) &&
          <LoanedOnLoan
            loan={loan}
            confirmBookReturn={confirmBookReturn}
          />
        }

        {isPending(loan) &&
          <LoanedPending
            className="loan-border-bottom"
            loan={loan}
            approveLoanRequest={approveLoanRequest}
            declineLoanRequest={declineLoanRequest}
          />
        }
        {isOverdue(loan) &&
          <LoanedOverdue
            loan={loan}
            confirmBookReturn={confirmBookReturn}
          />
        }
        {isAwaitingCollection(loan) &&
          <LoanedAwaitingCollection
            loan={loan}
            confirmBookCollected={confirmBookCollected}
          />
        }
      </div>
    </div>
  )
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
