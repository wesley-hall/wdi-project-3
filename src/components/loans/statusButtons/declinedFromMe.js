import React from 'react'


const OnLoanFromMe = (props) => {
  const { loan, confirmBookReturn } = props
  return (
    <div className="column is-4 is-gapless columns">
      <span className="column is-half is-gapless">On loan</span>
      <div className="column is-half is-gapless has-text-centered">
        <button className="button is-small is-warning" value={loan._id} onClick={confirmBookReturn}>
          Book Returned
        </button>
      </div>
    </div>
  )
}

export default OnLoanFromMe
