import React from 'react'


const BorrowedOverdue = (props) => {
  const { loan } = props
  return (
    <div className="column is-4 is-gapless columns">
      <span className="column is-half has-text-weight-bold has-text-danger is-gapless">Overdue</span>
      <div className="column is-half is-gapless is-pulled-right">
        Please return {loan.book.title} to {loan.book.owner.username}
      </div>
    </div>
  )
}

export default BorrowedOverdue
