import React from 'react'


const LoanedReturned = (props) => {
  const { loan } = props
  return (
    <div className="column is-4 is-gapless columns">
      <span className="column is-full">Returned on {loan.returned && loan.returned.substring(10,-5)}</span>
    </div>
  )
}

export default LoanedReturned
