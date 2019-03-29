import React from 'react'


const BorrowedReturned = (props) => {
  const { loan, redirectToBook } = props
  return (
    <div className="column is-4 is-gapless ">
      <div className="columns is-vcentered">
        <span className="column is-half is-gapless">Returned on<br /> {loan.returned && loan.returned.substring(10,-5)}</span>
        <div className="column is-half is-gapless">
          <button className="button is-small is-info" value={loan.book._id} onClick={redirectToBook}>
            Review/Rate
          </button>
        </div>
      </div>
    </div>
  )
}

export default BorrowedReturned
