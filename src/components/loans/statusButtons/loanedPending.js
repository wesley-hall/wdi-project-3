import React from 'react'


const LoanedPending = (props) => {
  const { loan, approveLoanRequest, declineLoanRequest } = props
  return (
    <div className="column is-4 is-gapless columns">
      <span className="column is-half is-gapless">Pending</span>
      <div className="column is-half is-gapless has-text-centered">
        <button className="button is-small is-success" value={loan._id} onClick={approveLoanRequest}>
          Approve
        </button>&nbsp;
        <button className="button is-small is-danger is-pulled-right" value={loan._id} onClick={declineLoanRequest}>
          Reject 
        </button>
      </div>
    </div>
  )
}

export default LoanedPending
