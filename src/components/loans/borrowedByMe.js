import React from 'react'

import BorrowedReturned from './statusButtons/borrowedReturned'
import BorrowedOverdue from './statusButtons/borrowedOverdue'

class BorrowedByMe extends React.Component {

  render() {
    const { loan, isPending, isAwaitingCollection, isDeclined, isOnLoan, isOverdue, isReturned, isExpired, redirectToBook, cancelLoanRequest } = this.props
    return (
      <div key={loan._id}>
        <div className={`columns is-mobile has-text-left is-vcentered loan-border-bottom ${isOverdue(loan) ? 'has-text-danger has-text-weight-bold' : ''}`}>
          <span className="column is-3 is-gapless">{loan.start.substring(10,-5)} to {loan.end.substring(10,-5)}</span>
          <span className="column is-2 is-gapless">{loan.book.title}</span>

          <div className="column is-3 is-gapless">
            <div className="columns is-1 is-marginless is-vcentered">
              <div className="column is-one-third">
                <figure className="image is-64x64 is-pulled-right">
                  <img className="is-rounded" src={loan.book.owner.profilePicture} />
                </figure>
              </div>
              <div className="column is-two-thirds">
                {loan.book.owner.email}
              </div>
            </div>
          </div>

          {isExpired(loan) &&
            <div className="column is-4 is-gapless columns">
              <span className="column is-full is-gapless">Request Expired</span>
            </div>
          }
          {isDeclined(loan) &&
            <div className="column is-4 is-gapless columns">
              <span className="column is-full is-gapless">Declined</span>
            </div>
          }

          {!isOnLoan(loan) && !isOverdue(loan) && !isReturned(loan) && !isExpired(loan) &&
            <div className="column is-4 is-gapless columns">
              <span className="column is-half is-gapless">Pending</span>
              <div className="column is-half is-gapless">
                <button className="button is-small is-danger is-pulled-right" value={loan._id} onClick={cancelLoanRequest}>
                  Cancel request
                </button>
              </div>
            </div>
          }
          {isOnLoan(loan) &&
              <div className="column is-4 is-gapless columns">
                <span className="column is-half is-gapless">On loan</span>
                <div className="column is-half is-gapless">
                  <button className="button is-small is-info is-pulled-right" onClick={this.handleClick}>
                    Rate/review book?
                  </button>
                </div>
              </div>
          }
          {isOverdue(loan) &&
            <BorrowedOverdue
              loan={loan}
            />

          }
          {isReturned(loan) &&
            <BorrowedReturned
              loan={loan}
              redirectToBook={redirectToBook}
            />
          }
        </div>
      </div>
    )
  }
}

export default BorrowedByMe
