import React from 'react'


const LoanedAwaitingCollection = (props) => {
  const { loan, confirmBookCollected } = props
  return (
    <div className="column is-4 is-gapless columns">
      <span className="column is-half is-gapless">Awaiting Collection</span>
      <div className="column is-half is-gapless has-text-centered">
        <button className="button is-small is-warning" value={loan._id} onClick={confirmBookCollected}>
          Book Collected
        </button>
      </div>
    </div>
  )
}

export default LoanedAwaitingCollection
