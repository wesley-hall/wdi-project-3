import React from 'react'

import LoanedReturned from './statusButtons/loanedReturned'
import LoanedOnLoan from './statusButtons/loanedOnLoan'
import LoanedPending from './statusButtons/loanedPending'
import LoanedOverdue from './statusButtons/loanedOverdue'
import LoanedAwaitingCollection from './statusButtons/loanedAwaitingCollection'

const LoanedFromMe = (props) => {
  const { loan, isPending, isExpired, approveLoanRequest, declineLoanRequest, isDeclined, isAwaitingCollection, confirmBookCollected, isOnLoan, isOverdue, confirmBookReturn, isReturned  } = props
  return (
    <div>
      <div className={`columns is-mobile  has-text-left is-vcentered loan-border-bottom ${isOverdue(loan) ? 'has-text-danger has-text-weight-bold' : ''}`}>
        <span className="column is-3 is-gapless">{loan.start.substring(10,-5)} to {loan.end.substring(10,-5)}</span>
        <span className="column is-2 is-gapless">{loan.book.title}</span>
        <span className="column is-3 is-gapless">
          <span className="columns is-1 is-marginless is-vcentered">
            <span className="column is-one-third">
              <figure className="image is-64x64 is-pulled-right">
                <img className="is-rounded" src={loan.borrower.profilePicture} />
              </figure>
            </span>
            <span className="column is-two-thirds">
              {loan.borrower.email}
            </span>
          </span>
        </span>
        {isExpired(loan) &&
          <div className="column is-4 is-gapless columns">
            <span className="column is-full is-gapless">Expired</span>
          </div>
        }
        {isDeclined(loan) &&
          <div className="column is-4 is-gapless columns">
            <span className="column is-full is-gapless">Declined</span>
          </div>
        }
        {isReturned(loan) &&
          <LoanedReturned
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
