const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.ObjectId, ref: 'Book'},
  borrower: { type: mongoose.Schema.ObjectId, ref: 'User'},
  start: { type: Date, required: true},
  end: { type: Date, required: true},
  message: { type: String },
  returned: { type: Date},
  approved: { type: Boolean },
  declined: { type: Boolean }
}, {
  timestamps: true
})

module.exports = mongoose.model('Loan', loanSchema)
